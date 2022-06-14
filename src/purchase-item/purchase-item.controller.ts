import { Controller, Delete, Get, Param, Patch, Post, Body, Query } from '@nestjs/common';
import { PurchaseItem } from './purchase-item.entity'
import { PurchaseItemService } from './purchase-item.service'
@Controller('purchase-item')
export class PurchaseItemController {
    constructor(private PurchaseItemService: PurchaseItemService){};
    @Get()
     getAll(): Promise<PurchaseItem[]> {
    return this.PurchaseItemService.findAll();
    }
    @Get(':id')
     findOne(@Param('id')id: Number): Promise<PurchaseItem> {
        return this.PurchaseItemService.findOne(id);
    }
    @Post()
    create(@Body()PurchaseItem: PurchaseItem) {
    return this.PurchaseItemService.create(PurchaseItem);
    }
}
