import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { validatePassword } from '../utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(mail: string, pass: string) {
    const user = await this.userService.findOneByMail(mail);

    if (!user) {
      throw new Error('User not found');
    }

    if (!validatePassword(pass, user.password)) {
      throw new Error('Invalid password');
    }

    delete user.password;

    return {
      access_token: this.jwtService.sign({ ...user }),
      user,
    };
  }
}
