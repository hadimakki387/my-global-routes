import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './send-email.dto';
@Injectable()
export class MailerService {
  constructor(private readonly configService: ConfigService) {}

  async sendMail({ email_to, template }: SendEmailDto) {
    const transporter = nodemailer.createTransport({
      host: this.configService.get('EMAIL_HOST'),
      port: this.configService.get('EMAIL_PORT_SSL'),
      secure: true,
      auth: {
        user: this.configService.get('EMAIL_USERNAME'),
        pass: this.configService.get('EMAIL_PASSWORD'),
      },
    });

    return await transporter
      .sendMail({
        from: this.configService.get('EMAIL_USERNAME'),
        to: email_to,
        subject: 'Hello from NestJS',
        html: template,
      })
      .then(() => {
        return { message: 'email sent successfully' };
      })
      .catch((error) => {
        throw new InternalServerErrorException(error);
      });
  }
}
