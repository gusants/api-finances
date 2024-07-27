import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import { hash, verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: Pick<User, 'email' | 'password' | 'name'>) {
    const exists = await this.prisma.user.findFirst({
      where: { email: dto.email },
    });
    if (exists) {
      throw new BadRequestException('Email já cadastrado');
    }

    const password = await hash(dto.password);
    const name = dto.name
      .trim()
      .split(' ')
      .map((val) => {
        const firstLetter = val.charAt(0).toUpperCase();
        const restOfTheName = val.slice(1).toLowerCase();
        return firstLetter + restOfTheName;
      })
      .join(' ');

    return await this.prisma.user.create({
      data: {
        email: dto.email.trim(),
        password,
        name,
        wallet: { create: { value: 0 } },
      },
      select: { name: true, id: true, wallet: { select: { value: true } } },
    });
  }

  async login(dto: Pick<User, 'email' | 'password'>) {
    const user = await this.prisma.user.findFirst({
      where: { email: dto.email },
    });
    if (!user) {
      throw new BadRequestException('Email/Senha incorretos');
    }
    const validatePassword = await verify(user.password, dto.password);
    if (!validatePassword) {
      throw new BadRequestException('Email/Senha incorretos');
    }
    return { expiresOn: 300, token: 'JWT' };
  }
}
