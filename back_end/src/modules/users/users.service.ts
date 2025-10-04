import { Injectable } from '@nestjs/common';
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

  async register(user: UserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const password = user.password;
    const hash = await bcrypt.hash(password, salt);

    const newUser = this.userRepository.create({...user, password: hash});
    // await this.userRepository.save(newUser);
    return newUser;
  }
}
