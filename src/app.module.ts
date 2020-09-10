import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './module/blog/blog.module';
import { UserModule } from './module/user/user.module';
import { ActivityModule } from './module/activity/activity.module';

import { CommonModule } from './common/common.module';


import { CompressionMiddleware } from './core/middleware/compression.middleware';
import { CSRFMiddleware } from './core/middleware/csrf.middleware';
import { HelmetMiddleware } from './core/middleware/helmet.middleware';

import { CorsMiddleware } from './core/middleware/cors.middleware';
import { CookieParserMiddleware } from './core/middleware/cookie-parser.middleware';
import { LocalsMiddleware } from './core/middleware/locals.middleware';
import ConfigModule from './config/config.module';

// 环境变量路径
// const envFilePath = process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production'
@Module({
  imports: [
    ConfigModule,
    CommonModule,
    BlogModule,
    UserModule,
    ActivityModule],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    const middlewares = [
      CookieParserMiddleware,
      CorsMiddleware,
      // CSRFMiddleware,
      // HelmetMiddleware,
      LocalsMiddleware,
      CompressionMiddleware
    ];

    consumer.apply(...middlewares).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
