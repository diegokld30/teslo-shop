import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// configurar la ruta
  app.setGlobalPrefix('api');
// configurar la validacion de Pipes para el DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
