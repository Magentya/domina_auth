import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/db/models/user.entity';

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
}
