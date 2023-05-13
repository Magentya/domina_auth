import { Body, Controller, Post } from '@nestjs/common';
import { Get, Request, UseGuards } from '@nestjs/common/decorators';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { ApiBody } from '@nestjs/swagger/dist/decorators/api-body.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { to } from 'await-to-js';
import { UseZodGuard } from 'nestjs-zod';
import { IGeneralResponse } from 'src/utils/general_types';

import { AuthService } from './auth.service';
import { LoginDto, LoginSchema } from './auth.zod';
import { JwtAuthGuard } from './jwt.guard';

@Controller('auth')
@ApiTags('auth router')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginDto })
  @UseZodGuard('body', LoginSchema)
  async login(@Body() body: LoginDto): Promise<IGeneralResponse> {
    const [err, auth] = await to(
      this.authService.login(body.mail, body.password),
    );

    if (err) {
      throw new HttpException(
        {
          status: 400,
          error: err.message,
        },
        400,
      );
    }

    return {
      status: 200,
      message: 'Login successfully',
      data: auth,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth('accessToken')
  getProfile(@Request() req): IGeneralResponse {
    return {
      status: 200,
      message: 'Login successfully',
      data: req.user,
    };
  }
}
