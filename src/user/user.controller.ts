import { Controller, Delete, Get, Param, Patch, Post, Body, Query } from '@nestjs/common';
import { User } from './user.entity'
import { UserService } from './user.service'
@Controller('user')
export class UserController {
    constructor(private UserService: UserService){};
    @Get()
     getAll(): Promise<User[]> {
    return this.UserService.findAll();
    }
    @Get(':id')
     findOne(@Param('id')id: Number): Promise<User> {
        return this.UserService.findOne(id);
    }
    @Post()
  create(@Body()user: User) {
    return this.UserService.create(user);
  }
}
