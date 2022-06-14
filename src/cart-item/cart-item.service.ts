import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import { CartItem } from './cart-item.entity';
import {Repository} from 'typeorm';
@Injectable()
export class CartItemService {
    constructor(
        @InjectRepository(CartItem)
        private userRepository: Repository<CartItem>,
    ){}
    findAll(): Promise<CartItem[]>{
        return this.userRepository.find();
    }

    findOne(id:any): Promise<CartItem>{
        return this.userRepository.findOne(id);
    }
    async create(user: CartItem): Promise<void>{
        await this.userRepository.save(user)
    }

}
