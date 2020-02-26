import { Module } from '@nestjs/common';
import { ShopsPromotionsController } from './shops-promotions.controller';
import { ShopsPromotionsService } from './shops-promotions.service';

@Module({
  controllers: [ShopsPromotionsController],
  providers: [ShopsPromotionsService]
})
export class ShopsPromotionsModule {}
