import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../db/models/user.entity';
import { CreateUserDto } from './user.dto';
import { hashPassword } from '../utils/bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async findOneByMail(mail: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        mail,
      },
    });
  }
  async create(user: CreateUserDto): Promise<User> {
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;
    return await this.userRepository.save(user);
  }
}
