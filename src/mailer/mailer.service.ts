import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './send-email.dto';
@Injectable()
export class MailerService {
  constructor(private readonly configService: ConfigService) {}

  async sendMail({ email_to, template ,subject,from,ownerEmail,emailPassword}: SendEmailDto) {
    const transporter = nodemailer.createTransport({
      host: this.configService.get('EMAIL_HOST'),
      port: this.configService.get('EMAIL_PORT_SSL'),
      secure: true,
      auth: {
        user: ownerEmail,
        pass: emailPassword,
      },
    });

    return await transporter
      .sendMail({
        from: from,
        to: email_to,
        subject: subject,
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
