import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAviationDto, UpdateAviationDto } from './aviation.dto';

@Controller('aviations')
export class AviationController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async create(@Body() { name, price }: CreateAviationDto) {
    return await this.prismaService.aviation.create({ data: { name, price } });
  }

  @Get(':id')
  async findOne(@Param() id: string) {
    return await this.prismaService.tissues.findFirst({ where: { id } });
  }

  @Get()
  async find() {
    return await this.prismaService.tissues.findMany();
  }

  @Patch(':id')
  async update(
    @Param() id: string,
    @Body() { name, price }: UpdateAviationDto,
  ) {
    return await this.prismaService.tissues.update({
      where: { id },
      data: { name, price },
    });
  }

  @Delete(':id')
  async delete(@Param() id: string) {
    return await this.prismaService.tissues.delete({ where: { id } });
  }
}
