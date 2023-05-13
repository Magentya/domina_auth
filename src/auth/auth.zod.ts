import { z } from 'nestjs-zod/z';
import { ApiProperty } from '@nestjs/swagger/dist';

export const LoginSchema = z.object({
  mail: z.string().email().describe('The mail'),
  password: z.string().describe('The password'),
});

export class LoginDto {
  @ApiProperty()
  mail: string;

  @ApiProperty()
  password: string;
}

export class token {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  name: string;
  last_name: string;
  username: string;
  mail: string;
  last_session: string;
  rol: {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: any;
    name: string;
  };
  agency: {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: any;
    name: string;
  };
  iat: number;
  exp: number;
}
