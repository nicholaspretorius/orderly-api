import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticationMiddleware } from 'common/authentication.middleware';
import * as express from 'express';

async function bootstrap() {
  // Adding for Auth0
  const server = express();
  const auth = new AuthenticationMiddleware().resolve();
  console.log("Hello Express!");
  server.post('/items', auth);
  server.post('/cart', auth);

  // Nest.js App
  const app = await NestFactory.create(AppModule, server);
  await app.listen(3000);
}
bootstrap();
