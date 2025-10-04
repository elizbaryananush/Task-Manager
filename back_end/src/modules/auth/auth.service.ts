import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async registerUser() {}

  async createCookie(
    @Res({ passthrough: true }) res: Response,
    token: { id: string }
  ) {
    res.cookie('authorization', token, {
      httpOnly: true, 
      // secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });
  }
}

