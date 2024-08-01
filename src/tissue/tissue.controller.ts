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
import { CreateTissueDto, UpdateTissueDto } from './tissue.dto';

@Controller('tissues')
export class TissueController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async create(@Body() { name, price }: CreateTissueDto) {
    return await this.prismaService.tissues.create({ data: { name, price } });
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
  async update(@Param() id: string, @Body() { name, price }: UpdateTissueDto) {
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
