import { Module } from '@nestjs/common';
import { ShopsChatsService } from './shops-chats.service';
import { ShopsChatsController } from './shops-chats.controller';

@Module({
  providers: [ShopsChatsService],
  controllers: [ShopsChatsController]
})
export class ShopsChatsModule {}
