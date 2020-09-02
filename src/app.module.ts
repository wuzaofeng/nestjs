import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './module/blog/blog.module';
import { UserModule } from './module/user/user.module';
import { ActivityModule } from './module/activity/activity.module';

import { CompressionMiddleware } from './core/middleware/compression.middleware';
import { CSRFMiddleware } from './core/middleware/csrf.middleware';
import { HelmetMiddleware } from './core/middleware/helmet.middleware';
import { CommonModule } from './common/common.module';
import { CorsMiddleware } from './core/middleware/cors.middleware';
import { serverCfg, staticCfg, databaseCfg } from './config'
import { CookieParserMiddleware } from './core/middleware/cookie-parser.middleware';
import { LocalsMiddleware } from './core/middleware/locals.middleware';

// 环境变量路径
// const envFilePath = process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [serverCfg, staticCfg, databaseCfg]
    }),
    CommonModule, BlogModule, UserModule, ActivityModule],
  controllers: [AppController],
  providers: [AppService],
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
