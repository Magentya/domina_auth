import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import helmet from 'helmet';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

import env from './env';

async function bootstrap() {
  const { port } = env;
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, { cors: { origin: '*' } });
  // configs
  app.setGlobalPrefix('api');
  app.use(morgan('dev'));
  app.use(
    helmet({
      hidePoweredBy: true,
    }),
  );

  app.connectMicroservice({
    tranport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3001,
    },
  });

  await app.startAllMicroservices();

  // start app
  await app.listen(port);
  logger.log(`App is running on port ${port}`);
}
bootstrap();
