import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { ItemsService } from 'items/items.service';
import { CartController } from 'cart/cart.controller';

@Module({
  imports: [],
  controllers: [ItemsController, CartController],
  providers: [ItemsService]
})
export class AppModule {}
