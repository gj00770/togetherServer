import { Module } from '@nestjs/common';
import { PurchaseItem } from './purchase-item.entity'
import {TypeOrmModule} from "@nestjs/typeorm";
import { PurchaseItemController } from './purchase-item.controller';
import { PurchaseItemService } from './purchase-item.service';
@Module({
  imports:[TypeOrmModule.forFeature([PurchaseItem])],
  exports:[TypeOrmModule],
  controllers: [PurchaseItemController],
  providers:[PurchaseItemService]
})
export class PurchaseItemModule {}
