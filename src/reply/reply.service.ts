import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"

import { Reply } from './reply.entity'
import {Repository} from 'typeorm'
@Injectable()
export class ReplyService {

    constructor(
        @InjectRepository(Reply)
        private userRepository: Repository<Reply>,
    ){}
    findAll(): Promise<Reply[]>{
        return this.userRepository.find();
    }

    findOne(id:any): Promise<Reply>{
        return this.userRepository.findOne(id);
    }
    async create(Reply: Reply): Promise<void>{
        await this.userRepository.save(Reply)
    }
}
