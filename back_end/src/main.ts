import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(express);
  app.enableCors();
  app.use(cookieParser());
  await app.listen(3001);
}
bootstrap();
