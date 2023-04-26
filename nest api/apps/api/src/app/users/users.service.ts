import {BadRequestException, Injectable, Logger, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UserModel} from "./models/user.model";
import {Repository} from "typeorm";
import {UserDto} from "./dtos/user.dto";
import {RegisterUserDto} from "./dtos/register-user.dto";
import {UserMapper} from "./mappers/user.mapper";

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserModel)
    private userModelRepository: Repository<UserModel>
  ) {}

  async registerUser(registerUser: RegisterUserDto): Promise<UserDto> {
    const model = await UserMapper.mapRegisterDTOToModel(registerUser);
    try {
      const savedModel = await this.userModelRepository.save(model);
      return UserMapper.mapModelToDTO(savedModel);
    } catch (error) {
      Logger.log(error, 'UserService.registerUser');
      throw new BadRequestException();
    }
  }

  async getUsers(): Promise<UserDto[]> {
    const foundUsers = await this.userModelRepository.find();
    if(!foundUsers) {
      return [];
    }
    return foundUsers.map((model) => UserMapper.mapModelToDTO(model));
  }

  async getUserById(id: string): Promise<UserDto> {
    const foundModel = await this.findModelById(id);
    return UserMapper.mapModelToDTO(foundModel);
  }

  private async findModelById(id: string): Promise<UserModel> {
    const foundModel = await this.userModelRepository.findOne({
      where: { id },
    });
    if (!foundModel) {
      throw new NotFoundException();
    }
    return foundModel;
  }

  async getUserByEmail(email: string): Promise<UserDto> {
    const foundModel = await this.userModelRepository.findOne({where : {email}});
    if(!foundModel) {
      throw new NotFoundException();
    }
    return foundModel;
  }

}
