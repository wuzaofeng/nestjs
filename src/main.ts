import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {join} from 'path';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';
import { AuthGuard } from './core/guard/auth.guard';
import { HttpExceptionFilter } from './core/filters/http-exception.filter';
import { ResponseInterceptor } from './core/interceptor/response.interceptor';
import { ConfigService } from '@nestjs/config';
// import { MyLoggerService } from './common/logger.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // 日志输出
    logger: new Logger()
  })

  const configService: ConfigService = app.get(ConfigService)
  // const myLoggerService: MyLoggerService = app.get(MyLoggerService);

  console.log('configService', configService)

  // 静态资源配置
  app.useStaticAssets(join(__dirname, '..', 'public'),{
    prefix: '/static',   //设置虚拟路径
  });

  // 模板引擎配置
  app.setBaseViewsDir(join(__dirname, '..', 'views')) // 放视图的文件
  app.setViewEngine('pug');

  // swagger创建文档
  const options = new DocumentBuilder()
    .setTitle('nest api文档')
    .setDescription('描述')
    .setVersion('1.0')
    .addTag('接口定义')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  // 全局注册守卫
  app.useGlobalGuards(new AuthGuard());

  // 全局注册异常处理
  app.useGlobalFilters(new HttpExceptionFilter())

  // 全局注册拦截器
  app.useGlobalInterceptors(new ResponseInterceptor())

  const port = configService.get<string>('server.port')

  await app.listen(port);

  console.log({
    NODE_ENV: process.env.NODE_ENV,
    port,
    url: `http://localhost:${port}`
  })
}
bootstrap();
