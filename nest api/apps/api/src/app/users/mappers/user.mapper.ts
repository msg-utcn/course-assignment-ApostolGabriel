import {UserModel} from "../models/user.model";
import {UserDto} from "../dtos/user.dto";
import {RegisterUserDto} from "../dtos/register-user.dto";
import * as bcrypt from 'bcrypt';

export class UserMapper {

  static mapModelToDTO(model: UserModel): UserDto {
    return new UserDto({
      id: model.id,
      name: model.name,
      email: model.email,
      roles: model.roles
    }
    )
  }

  static async mapRegisterDTOToModel(registerDTO: RegisterUserDto): Promise<UserModel> {
    const saltOrRounds = Math.random();
    return new UserModel(
      {
        id: undefined,
        name: registerDTO.name,
        password: await bcrypt.hash(registerDTO.password, saltOrRounds),
        email: registerDTO.email,
        roles: undefined
      }
    );
  }

}
