import { IsString } from 'class-validator';
export class SendEmailDto {
  @IsString()
  email_to: string;
  @IsString()
  template: string;
  @IsString()
  subject: string;
}
