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
import { CreateDispatchDto, UpdateDispatchDto } from './dispatch.dto';

@Controller('dispatchs')
export class DispatchController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async create(@Body() { name, price }: CreateDispatchDto) {
    return await this.prismaService.dispatchs.create({ data: { name, price } });
  }

  @Get(':id')
  async findOne(@Param() id: string) {
    return await this.prismaService.dispatchs.findFirst({ where: { id } });
  }

  @Get()
  async find() {
    return await this.prismaService.dispatchs.findMany();
  }

  @Patch(':id')
  async update(
    @Param() id: string,
    @Body() { name, price }: UpdateDispatchDto,
  ) {
    return await this.prismaService.dispatchs.update({
      where: { id },
      data: { name, price },
    });
  }

  @Delete(':id')
  async delete(@Param() id: string) {
    return await this.prismaService.dispatchs.delete({ where: { id } });
  }
}
