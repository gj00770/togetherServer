import { Controller, Delete, Get, Param, Patch, Post, Body, Query } from '@nestjs/common';
import { SellerInfo } from './seller-info.entity'
import { SellerInfoService } from './seller-info.service'
@Controller('seller-info')
export class SellerInfoController {
    constructor(private SellerInfoService: SellerInfoService){};
    @Get()
     getAll(): Promise<SellerInfo[]> {
    return this.SellerInfoService.findAll();
    }
    @Get(':id')
     findOne(@Param('id')id: Number): Promise<SellerInfo> {
        return this.SellerInfoService.findOne(id);
    }
    @Post()
    create(@Body()SellerInfo: SellerInfo) {
    return this.SellerInfoService.create(SellerInfo);
    }
}
