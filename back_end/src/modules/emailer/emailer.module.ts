import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { EmailerService } from './emailer.service';
import { EmailerController } from './emailer.controller';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'; // ✅ Import properly

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: 'elizbaryananush27@gmail.com',
          pass: 'elizbar_yananush123A',
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), // ✅ fixed constructor
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [EmailerController], // ✅ usually EmailerController only
  providers: [EmailerService],
  exports: [EmailerService],
})
export class EmailerModule {}
