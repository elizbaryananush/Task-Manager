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
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/dto/user.dto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { EmailDto } from 'src/dto/email.dto';
import { UserId } from 'src/decorators/get-user.decorator';
import { EmailerService } from '../emailer/emailer.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly emailerService: EmailerService,
    private jwtService: JwtService
  ) {}

  @Post('register')
  async register(
    @Body() user: UserDto,
    @Res({ passthrough: true }) res: Response
  ) {
    try {
      const newUser = await this.authService.registerUser(user);
      const token = this.jwtService.sign({ id: newUser.id });

      await this.authService.createCookie(res, token);
      return 0;
    } catch (err) {
      return new InternalServerErrorException(
        `Failed to create user. With error ${err}`
      );
    }
  }

  @Post('sendEmail')
  async sendEmail(@Body() email: EmailDto, @UserId() userId: string) {
    return this.authService.sendMail(email, userId);
  }
}

