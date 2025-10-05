import { IsEmail, IsNotEmpty, MinLength, IsBoolean, IsOptional, IsString } from 'class-validator';

export class EmailDto {
  @IsEmail()
  email: string;

  @IsString()
  verificationCode: string;
}