import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useStaticAssets(`${__dirname}/public`);
  // the next two lines did the trick
  // app.use(bodyParser.json({limit: '50mb'}));
  // app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  await app.listen(3000);
}
bootstrap();
