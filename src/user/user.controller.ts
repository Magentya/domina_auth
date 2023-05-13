import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { IGeneralResponse } from '../utils/general_types';
import { CreateUserDto } from './user.dto';
import to from 'await-to-js';
import { UseZodGuard } from 'nestjs-zod';
import { CreateUserSchema } from './user.zod';
import { MessagePattern } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @UseZodGuard('body', CreateUserSchema)
  async create(@Body() data: CreateUserDto): Promise<IGeneralResponse> {
    const [err, user] = await to(this.userService.create(data));

    if (err) {
      throw new HttpException(
        {
          error: err,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      status: 201,
      message: 'User created successfully',
      data: user,
    };
  }

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    console.log('data', data);
    return (data || []).reduce((a, b) => a + b);
  }
}
