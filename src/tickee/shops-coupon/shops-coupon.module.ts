import { Module } from '@nestjs/common';
import { ShopsCouponController } from './shops-coupon.controller';
import { ShopsCouponService } from './shops-coupon.service';

@Module({
  controllers: [ShopsCouponController],
  providers: [ShopsCouponService]
})
export class ShopsCouponModule {}
