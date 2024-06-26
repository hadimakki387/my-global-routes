import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [ ConfigModule.forRoot(), MailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
