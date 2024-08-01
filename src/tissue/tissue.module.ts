import { Module } from '@nestjs/common';
import { TissueController } from './tissue.controller';
import { PrismaService } from 'src/prisma.service';

@Module({ controllers: [TissueController], providers: [PrismaService] })
export class TissueModule {}
