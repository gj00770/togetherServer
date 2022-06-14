import { Controller, Delete, Get, Param, Patch, Post, Body, Query } from '@nestjs/common';
import { Product } from './product.entity'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
    constructor(private ProductService: ProductService){};
    @Get()
    getAll(): Promise<Product[]> {
    return this.ProductService.findAll();
    }
    @Get(':id')
    findOne(@Param('id')id: Number): Promise<Product> {
        return this.ProductService.findOne(id);
    }
    @Post()
    create(@Body()Product: Product) {
    return this.ProductService.create(Product);
    }

    @Post('init')
    init(){
        return this.ProductService.createDummyDataList()
    }
}
