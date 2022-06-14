import { Controller, Delete, Get, Param, Patch, Post, Body, Query } from '@nestjs/common';
import { Reply } from './reply.entity'
import { ReplyService } from './reply.service'

@Controller('reply')
export class ReplyController {
     constructor(private ReplyService: ReplyService){};
@Get()
 getAll(): Promise<Reply[]> {
return this.ReplyService.findAll();
}
@Get(':id')
 findOne(@Param('id')id: Number): Promise<Reply> {
    return this.ReplyService.findOne(id);
}
@Post()
create(@Body()Reply: Reply) {
return this.ReplyService.create(Reply);
}}
