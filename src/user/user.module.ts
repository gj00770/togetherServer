import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserController} from './user.controller'
import {User} from './user.entity'
@Module({
    imports:[TypeOrmModule.forFeature([User])],
    exports:[TypeOrmModule],
    controllers:[UserController],
    providers: [UserService]
})
export class UserModule {}
