import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModel} from "./models/user.model";
import {UsersService} from "./users.service";
import {UsersController} from "./users.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
