import { Module } from '@nestjs/common';
import { GebtamModule } from './gebtam/gebtam.module';
import { TickeeModule } from './tickee/tickee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GebtamModule,
    TickeeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
