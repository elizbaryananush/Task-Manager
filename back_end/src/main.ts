import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(express);
  // app.enableCors({
  //   origin: 'http://localhost:3000',
  //   credentials: true,
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  //   allowedHeaders: ['Content-Type', 'authorization'],
  // });

  app.enableCors({
    credentials: true,
    origin: 'http://localhost:3000',
    exposedHeaders: ['set-cookie'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    optionsSuccessStatus: 200,
  });
  app.use(cookieParser());
  await app.listen(3001);
}
bootstrap();
