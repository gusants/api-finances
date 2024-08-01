import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TissueModule } from './tissue/tissue.module';
import { AviationModule } from './aviation/aviation.module';
import { DispatchModule } from './dispatch/dispatch.module';
import { ModelModule } from './model/model.module';

@Module({
  imports: [
    AuthModule,
    TissueModule,
    AviationModule,
    DispatchModule,
    ModelModule,
  ],
})
export class AppModule {}
