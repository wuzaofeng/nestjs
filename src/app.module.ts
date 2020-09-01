import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './module/blog/blog.module';
import { UserModule } from './module/user/user.module';
import { UserService } from './module/user/user.service';
import { LoggerMiddleware } from './share/middleware/logger.middleware';
import { ActivityModule } from './activity/activity.module';
// import configuration from './config'

import * as cookieParser from 'cookie-parser'
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as compression from 'compression';

// 环境变量路径
const envFilePath = process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production'
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env', envFilePath]
  }), BlogModule, UserModule, ActivityModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    const middlewares = [
      cookieParser,
      helmet,
      csurf,
      compression
    ];

    consumer.apply(...middlewares)
  }
}
