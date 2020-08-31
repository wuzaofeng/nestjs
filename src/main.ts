import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {join} from 'path';
import { Logger } from '@nestjs/common';
import * as cookieParser from 'cookie-parser'
import * as helmet from 'helmet';
import * as csurf from 'csurf';

import { AppModule } from './app.module';
import { AuthGuard } from './share/guard/auth.guard';
import { HttpExceptionFilter } from './share/filters/http-exception.filter';
import { ResponseInterceptor } from './share/interceptor/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // 日志输出
    logger: new Logger()
  })

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

  // 配置cookie中间件
  app.use(cookieParser());

  // 全局注册守卫
  app.useGlobalGuards(new AuthGuard());

  // 全局注册异常处理
  app.useGlobalFilters(new HttpExceptionFilter())

  // 全局注册拦截器
  app.useGlobalInterceptors(new ResponseInterceptor())

  app.use(helmet());
  app.use(csurf({
    cookie: true
  }));

  const port = process.env.PORT || 3000

  await app.listen(port);
  console.log('http://localhost:' + port)
}
bootstrap();
