import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(express);
  app.enableCors({
    origin: 'http://localhost:3000', // your frontend URL
    credentials: true, // allow cookies to be sent
  });
  app.use(cookieParser());
  await app.listen(3001);
}
bootstrap();
