import { IsEmail, IsNotEmpty, MinLength, IsBoolean, IsOptional, IsString, IsNumber } from 'class-validator';

export class VeerificationCodeDto {
  @IsNumber()
  verificationCode: number;
}