import {
  Injectable,
  InternalServerErrorException,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
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

  async registerUser(user: UserDto) {
    const newUser = await this.usersService.register(user);
    console.log(newUser);

    return newUser;
  }

  async sendMail(emailData: EmailDto, userId: string) {
    const { email } = emailData;
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['email'],
    });

    if (!user) {
      throw new UnauthorizedException('something went wrong');
    }

    const existedEmail = await this.emailRepository.findOne({
      where: { email: email },
    });

    if (existedEmail) {
      throw new InternalServerErrorException('Email already in use');
    }

    const newEmail = this.emailRepository.create({ email, user: user });

    const verificationCode = await this.emailerService.sendVerificationEmail({
      email,
    });

    newEmail.verificationCode = verificationCode;

    await this.emailRepository.save(newEmail);

    const emailWithUser = await this.emailRepository.findOne({
      where: { id: newEmail.id },
      relations: ['user'],
    });

    return emailWithUser;
  }

  async verifyMail(verificationCodeData: VeerificationCodeDto, userId: string) {
    const { verificationCode } = verificationCodeData;
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['email'],
    });

    if (!user) {
      throw new UnauthorizedException('something went wrong');
    }

    if (user.email.verificationCode == verificationCode) {
      user.email.isVerified = true;
      return {"massage" : "your email is verified"}
    }else{
      return {"massage" : "verification failed"}
    }
  }

  async createCookie(@Res({ passthrough: true }) res: Response, token: string) {
    console.log('setting');
    
    res.cookie('authorization', token, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
      secure: false, 
    });
  }
}

