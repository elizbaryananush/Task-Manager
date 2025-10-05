import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async register(user: UserDto) {
    const existedUser = await this.userRepository.findOne({
      where: { username: user.username },
    });

    if (existedUser) {
      return { massage: 'user already exists' };
    }

    const salt = await bcrypt.genSalt();
    const password = user.password;
    const hash = await bcrypt.hash(password, salt);

    const newUser = this.userRepository.create({
      ...user,
      password: hash,
      email: null,
    });
    console.log('register', newUser.email);
    await this.userRepository.save(newUser);
    return newUser;
  }
}
