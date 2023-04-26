import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {UsersConfig} from "./users.config";
import {ApiTags} from "@nestjs/swagger";
import {UsersService} from "./users.service";
import {UserDto} from "./dtos/user.dto";
import {RegisterUserDto} from "./dtos/register-user.dto";

@Controller(UsersConfig.API_ROUTE)
@ApiTags(UsersConfig.SWAGGER_FEATURE)
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get(':id')
  async getUsersById(@Param('id') id: string) : Promise<UserDto> {
    return await this.usersService.getUserById(id);
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    return await this.usersService.getUsers();
  }

  @Post()
  async registerUser(@Body() user: RegisterUserDto): Promise<UserDto> {
    return await this.usersService.registerUser(user);
  }

}
