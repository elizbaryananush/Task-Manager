import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { request } from 'http';

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // const token =
    //   request.cookies?.access_token ||
    //   request.headers.authorization?.split(' ')[1];

    //   console.log(request.user);
      

    // if (!token) return null;

    // const jwtService = new JwtService({ secret: process.env.JWT_SECRET });
    // const decoded = jwtService.verify(token);
    return request.user?.id;
  },
);
