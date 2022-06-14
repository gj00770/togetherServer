import { Controller, Delete, Get, Param, Patch, Post, Body, Query } from '@nestjs/common';
import { CartItem } from './cart-item.entity'
import { CartItemService } from './cart-item.service'
@Controller('cart-item')
export class CartItemController {
    constructor(private ProductService: CartItemService){};
    @Get()
     getAll(): Promise<CartItem[]> {
    return this.ProductService.findAll();
    }
    @Get(':id')
     findOne(@Param('id')id: Number): Promise<CartItem> {
        return this.ProductService.findOne(id);
    }
    @Post()
    create(@Body()CartItem: CartItem) {
    return this.ProductService.create(CartItem);
    }
}
