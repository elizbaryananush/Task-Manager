import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { UserDto } from 'src/dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  create(@Body() user: UserDto): Promise<User> {
    return this.usersService.register(user);
  }
}
