import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

import * as cowSay from 'cowsay'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new ConfigService();
  app.enableCors();



  const docConfig = new DocumentBuilder()
    .setTitle('Newsrme User Verification API')
    .setDescription('Newsrme User Verification API api doc')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('docs', app, document);
  await app.listen(config.get('PORT'));


  const cow = cowSay.say({
    text: `Server running: ${config.get('APP_URL')} | ${config.get(
      'APP_URL',
    )}/docs`,
    e: 'oO',
    T: 'U ',
  });

  console.log(cow);
}
bootstrap();
