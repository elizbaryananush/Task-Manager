import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EmailerService } from './emailer.service';

@Controller('emailers')
export class EmailerController {
  constructor(private readonly emailerService: EmailerService) {}
}
