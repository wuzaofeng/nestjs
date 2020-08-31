import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {join} from 'path';
import { Logger } from '@nestjs/common';
import * as cookieParser from 'cookie-parser'

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // 日志输出
    logger: process.env.NODE_ENV === 'development' ? new Logger() : false
  })

  // 静态资源配置
  app.useStaticAssets(join(__dirname, '..', 'public'),{
    prefix: '/static/',   //设置虚拟路径
 });

  // 模板引擎配置
  app.setBaseViewsDir(join(__dirname, 'views')) // 放视图的文件
  app.setViewEngine('ejs');	

  // swagger创建文档
  const options = new DocumentBuilder()
    .setTitle('example')
    .setDescription('描述')
    .setVersion('1.0')
    .addTag('tag')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  // 配置cookie中间件
  app.use(cookieParser());

  const port = process.env.PORT || 3000

  await app.listen(port);
  console.log('http://localhost:' + port)
}
bootstrap();
