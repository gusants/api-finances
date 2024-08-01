import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ModelService } from './model.service';
import { ModelController } from './model.controller';
import { ModelMapper } from './model.mapper';

@Module({
  providers: [PrismaService, ModelService, ModelMapper],
  controllers: [ModelController],
})
export class ModelModule {}
