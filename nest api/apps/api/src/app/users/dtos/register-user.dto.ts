import {ApiProperty} from "@nestjs/swagger";

export class RegisterUserDto {
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
    description: 'The password of the user',
    example: 'somepassword',
    required: true,
  })
  password: string;

  constructor(values: Partial<RegisterUserDto>) {
    if(values) {
      this.name = values.name
      this.email = values.email
      this.password = values.password
    }
  }
}
