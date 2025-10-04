import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mailers')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}
}
