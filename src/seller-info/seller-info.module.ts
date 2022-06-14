import { Module } from '@nestjs/common';
import { SellerInfoService } from './seller-info.service';
import { SellerInfoController } from './seller-info.controller';
import { SellerInfo } from './seller-info.entity'
import {TypeOrmModule} from "@nestjs/typeorm";
@Module({
  imports:[TypeOrmModule.forFeature([SellerInfo])],
  exports:[TypeOrmModule],
  controllers: [SellerInfoController],
  providers:[SellerInfoService]
})
export class SellerInfoModule {}
