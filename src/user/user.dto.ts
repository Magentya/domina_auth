import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  mail: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
