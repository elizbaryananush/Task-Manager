import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersRepository } from 'src/repositories/users.repository';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { UsersService } from '../users/users.service';
import { EmailerService } from '../emailer/emailer.service';
import { MailerService } from '@nestjs-modules/mailer';
// import { MailerModule, MailerService } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecretkey', // store in .env later
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    EmailerService,
    JwtStrategy,
    UsersRepository,
  ],
})
export class AuthModule {}

