import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopsApplicationsRepository } from './shops-applications.repository';
import { ShopsRepository } from './shops.repository';
import { ShopsCategoryRepository } from './shops-category.repository';
import { ShopsFollowerRepository } from './shops-follower.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ShopsApplicationsRepository,
      ShopsRepository,
      ShopsCategoryRepository,
      ShopsFollowerRepository

    ])],
  providers: [ShopsService],
  controllers: [ShopsController]
})
export class ShopsModule { }
