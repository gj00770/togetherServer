import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"

import { PurchaseItem } from './purchase-item.entity'
import {Repository} from 'typeorm'
@Injectable()
export class PurchaseItemService {
    constructor(
        @InjectRepository(PurchaseItem)
        private userRepository: Repository<PurchaseItem>,
    ){}
    findAll(): Promise<PurchaseItem[]>{
        return this.userRepository.find();
    }

    findOne(id:any): Promise<PurchaseItem>{
        return this.userRepository.findOne(id);
    }
    async create(PurChaseItem: PurchaseItem): Promise<void>{
        await this.userRepository.save(PurChaseItem)
    }

}
