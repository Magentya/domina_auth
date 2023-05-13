import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  mail: string;

  @ApiProperty()
  password: string;
}
