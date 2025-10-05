import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { UserDto } from 'src/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { EmailDto } from 'src/dto/email.dto';
import { EmailRepository } from 'src/repositories/email.repository';
import { UsersRepository } from 'src/repositories/users.repository';
import { EmailerService } from '../emailer/emailer.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: UsersRepository,
    private emailRepository: EmailRepository,

    private usersService: UsersService,
    private emailerService: EmailerService,
    private jwtService: JwtService
  ) {}

  async registerUser(user: UserDto): Promise<User> {
    const newUser = await this.usersService.register(user);
    console.log(newUser);

    return newUser;
  }

  async verifyMail(email: EmailDto) {
    const newEmail = await this.emailRepository.create(email);

    const verificationCode =
      await this.emailerService.sendVerificationEmail(email);

    newEmail.verificationCode = verificationCode;

    await this.emailRepository.save(newEmail);

    return newEmail
  }

  async createCookie(@Res({ passthrough: true }) res: Response, token: string) {
    res.cookie('authorization', token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });
  }
}

