import {UserRole} from "../models/user-role";
import {ApiProperty} from "@nestjs/swagger";

export class UserDto {
  @ApiProperty({
    description: 'The uuid of the user',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  id?: string;

  @ApiProperty({
    description: 'The name of the user',
    example: 'John Smith',
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john_smith@yahoo.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    description: 'The roles of the user',
    example: '[ADMIN]',
    required: true,
  })
  roles: UserRole[];

  constructor(values: Partial<UserDto>) {
    if(values) {
      this.id = values.id
      this.name = values.name
      this.email = values.email
      this.roles = values.roles
    }
  }
}
