import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { UserDto } from 'src/dto/user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    
    private usersService : UsersService,
    private jwtService : JwtService,
  ) {}

  async registerUser(user : UserDto): Promise<User> {
    const newUser = await this.usersService.register(user)
    console.log(newUser);
    
    return newUser
  }

  async createCookie(
    @Res({ passthrough: true }) res: Response,
    token: string
  ) {
    res.cookie('authorization', token, {
      httpOnly: true, 
      // secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });
  }
}

