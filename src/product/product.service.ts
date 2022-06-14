import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import {Product} from './product.entity'
import {Repository} from 'typeorm'
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ){}
    findAll(): Promise<Product[]>{
        return this.productRepository.find();
    }

    findOne(id:any): Promise<Product>{
        return this.productRepository.findOne(id);
    }
    async create(user: Product): Promise<void>{
        await this.productRepository.save(user)
    }


    async createDummyDataList(){
        const row = new Product();
        row.productName = "a";
        row.price = 2;
        row.end_date = 3;
        row.itemImg = '1322332323';
        row.itemInfo = '2333333';
        row.category = '23234';
    await this.productRepository.save(row)
        
    }
    


}
