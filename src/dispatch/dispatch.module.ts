import { Module } from '@nestjs/common';
import { DispatchController } from './dispatch.controller';
import { PrismaService } from 'src/prisma.service';

@Module({ controllers: [DispatchController], providers: [PrismaService] })
export class DispatchModule {}
