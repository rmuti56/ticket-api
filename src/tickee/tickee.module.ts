import { Module } from '@nestjs/common';
import { AdminsModule } from './admins/admins.module';
import { ShopsModule } from './shops/shops.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { ShopsOperatorsModule } from './shops-operators/shops-operators.module';
import { ShopsChatsModule } from './shops-chats/shops-chats.module';
import { ShopsCouponModule } from './shops-coupon/shops-coupon.module';
import { ShopsPromotionsModule } from './shops-promotions/shops-promotions.module';
import { NoticeModule } from './notice/notice.module';
import { FeedsModule } from './feeds/feeds.module';
import { ProvincesModule } from './provinces/provinces.module';
import { LogModule } from './log/log.module';


@Module({
  imports: [AdminsModule, ShopsModule, AuthModule, CustomerModule, ShopsOperatorsModule, ShopsChatsModule, ShopsCouponModule, ShopsPromotionsModule, NoticeModule, FeedsModule, ProvincesModule, LogModule]
})
export class TickeeModule { }
