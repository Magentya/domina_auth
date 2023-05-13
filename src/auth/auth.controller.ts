import { Body, Controller, HttpStatus, Post, HttpCode } from '@nestjs/common';
import { Get, Request, UseGuards } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { to } from 'await-to-js';
import { UseZodGuard } from 'nestjs-zod';
import { MessagePattern } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';

import { IGeneralResponse } from '../utils/general_types';
import { AuthService } from './auth.service';
import { LoginSchema } from './auth.zod';
import { LoginDto } from './auth.dto';
import { JwtAuthGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseZodGuard('body', LoginSchema)
  async login(@Body() data: LoginDto): Promise<IGeneralResponse> {
    const [err, auth] = await to(
      this.authService.login(data.mail, data.password),
    );

    if (err) {
      throw new HttpException(
        {
          error: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      status: 200,
      message: 'Login successfully',
      data: auth,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req): IGeneralResponse {
    return {
      status: 200,
      message: 'Get profile successfully',
      data: req.user,
    };
  }

  @MessagePattern({ cmd: 'validate-token' })
  validateToken(data: string): boolean {
    try {
      this.jwtService.verify(data);
      return true;
    } catch (error) {
      return false;
    }
  }
}
