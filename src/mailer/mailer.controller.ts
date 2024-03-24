import { Controller } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { Post, Body } from '@nestjs/common';
import { SendEmailDto } from './send-email.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}
  @Post('send')
  async sendMail(@Body() mail: SendEmailDto) {
    return this.mailerService.sendMail(mail);
  }
}
