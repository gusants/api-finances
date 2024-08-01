import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AviationController } from './aviation.controller';

@Module({ controllers: [AviationController], providers: [PrismaService] })
export class AviationModule {}
