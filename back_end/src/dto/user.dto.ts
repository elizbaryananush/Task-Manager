import { IsEmail, IsNotEmpty, MinLength, IsBoolean, IsOptional } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MinLength(6)
  username: string;

  @IsNotEmpty()
  password: string;
}