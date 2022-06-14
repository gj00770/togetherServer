import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import {UserController} from './user/user.controller'
import {User} from './user/user.entity'
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { ReplyModule } from './reply/reply.module';
import {Product} from './product/product.entity'
import {Reply} from './reply/reply.entity'
import {SellerInfo} from './seller-info/seller-info.entity'
import {PurchaseItem} from './purchase-item/purchase-item.entity'
import {CartItem} from './cart-item/cart-item.entity'
import { SellerInfoModule } from './seller-info/seller-info.module';
import { PurchaseItemController } from './purchase-item/purchase-item.controller';
import { PurchaseItemModule } from './purchase-item/purchase-item.module';
import { CartItemModule } from './cart-item/cart-item.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '3532',
      database: 'together',
      entities: [User,Product,Reply,CartItem,PurchaseItem,SellerInfo],
      synchronize: true,
    }),
    UserModule,
    ProductModule,
    ReplyModule,
    SellerInfoModule,
    PurchaseItemModule,
    CartItemModule,
  ],
  providers: [ProductService, ],
  controllers: []
})
export class AppModule {}