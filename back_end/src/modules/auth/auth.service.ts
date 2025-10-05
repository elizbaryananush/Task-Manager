import { Injectable, Res, UnauthorizedException } from '@nestjs/common';
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
import { VeerificationCodeDto } from 'src/dto/verification-code.dto';

@Injectable()
export class AuthService {
  constructor(
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

  async sendMail(email: EmailDto, userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['email'],
    });

    if (!user) {
      throw new UnauthorizedException('something went wrong')
    }

    const newEmail = this.emailRepository.create(email);

    const verificationCode =
      await this.emailerService.sendVerificationEmail(email);

    newEmail.verificationCode = verificationCode;

    newEmail.user = user

    await this.emailRepository.save(newEmail);

    const emailWithUser = await this.emailRepository.findOne({
      where: { id: newEmail.id },
      relations: ['user'],
    });

    return emailWithUser;
  }

  async verifyMail(verificationCode: VeerificationCodeDto, userId: string) {
    if (verificationCode.verificationCode) {
    }
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

