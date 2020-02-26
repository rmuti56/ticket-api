import { Module } from '@nestjs/common';
import { ShopsOperatorsService } from './shops-operators.service';
import { ShopsOperatorsController } from './shops-operators.controller';

@Module({
  providers: [ShopsOperatorsService],
  controllers: [ShopsOperatorsController]
})
export class ShopsOperatorsModule {}
