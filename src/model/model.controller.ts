import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateModelDto, UpdateModelDto } from './model.dto';
import { ModelService } from './model.service';

@Controller('models')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}
  @Post()
  async create(@Body() dto: CreateModelDto) {
    return await this.modelService.createOne(dto);
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.modelService.findOne(id);
  }

  @Get()
  async list() {
    return await this.modelService.findMany();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateModelDto) {
    return await this.modelService.updateOne(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.modelService.deleteOne(id);
  }
}
