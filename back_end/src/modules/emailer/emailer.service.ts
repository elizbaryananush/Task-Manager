import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { EmailDto } from 'src/dto/email.dto';

@Injectable()
export class EmailerService {
  constructor(private readonly mailerService: MailerService) {}

  async sendVerificationEmail(data: EmailDto) {
    const { email } = data;

    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    await this.mailerService.sendMail({
      to: email,
      subject: 'Your Verification Code',
      text: `Your verification code is: ${verificationCode}`,
      html: `<p>Your verification code is: <b>${verificationCode}</b></p>`,
    });

    return verificationCode
  }
}

