import { Module } from '@nestjs/common';
import { ReplyController } from './reply.controller';
import { ReplyService } from './reply.service';
import { Reply } from './reply.entity'
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports:[TypeOrmModule.forFeature([Reply])],
  exports:[TypeOrmModule],
  controllers: [ReplyController],
  providers:[ReplyService]
})
export class ReplyModule {}
