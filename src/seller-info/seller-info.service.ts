import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import { SellerInfo } from './seller-info.entity'
import {Repository} from 'typeorm'
@Injectable()
export class SellerInfoService {
    constructor(
        @InjectRepository(SellerInfo)
        private userRepository: Repository<SellerInfo>,
    ){}
    findAll(): Promise<SellerInfo[]>{
        return this.userRepository.find();
    }

    findOne(id:any): Promise<SellerInfo>{
        return this.userRepository.findOne(id);
    }
    async create(SellerInfo: SellerInfo): Promise<void>{
        await this.userRepository.save(SellerInfo)
    }
}
