import { Module } from '@nestjs/common';
import { CartItemController } from './cart-item.controller';
import { CartItemService } from './cart-item.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CartItem} from './cart-item.entity'
@Module({
  imports:[TypeOrmModule.forFeature([CartItem])],
  exports:[TypeOrmModule],
  controllers: [CartItemController],
  providers:[CartItemService]
})
export class CartItemModule {}
// @Module({
//   imports:[TypeOrmModule.forFeature([User])],
//   exports:[TypeOrmModule],
//   controllers:[UserController],
//   providers: [UserService]
// })