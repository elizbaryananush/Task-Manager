import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/dto/user.dto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { EmailDto } from 'src/dto/email.dto';
import { UserId } from 'src/decorators/get-user.decorator';
import { EmailerService } from '../emailer/emailer.service';
import { VeerificationCodeDto } from 'src/dto/verification-code.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { User } from 'src/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly emailerService: EmailerService,
    private jwtService: JwtService
  ) {}

  @Post('register')
  async register(
    @Body() user: UserDto,
    @Res({ passthrough: true }) res: Response
  ) {
    try {
      const newUser = await this.usersService.register(user) as User;
      const token = this.jwtService.sign({ id: newUser.id });

      await this.authService.createCookie(res, token);
      return {"massage" : "registered successfully"};
    } catch (err) {
      return new InternalServerErrorException(
        `Failed to create user. With error ${err}`
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('sendEmail')
  async sendEmail(@Body() email: EmailDto, @UserId() userId: string) {
    return this.authService.sendMail(email, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('verifyEmail')
  async verifyEmail(
    @Body() verificationCode: VeerificationCodeDto,
    @UserId() userId: string
  ) {
    return this.authService.verifyMail(verificationCode, userId);
  }
}

