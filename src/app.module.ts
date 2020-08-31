import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './module/blog/blog.module';
import { UserModule } from './module/user/user.module';
import { UserService } from './module/user/user.service';
import { AuthModule } from './module/auth/auth.module';
import { LoggerMiddleware } from './share/middleware/logger.middleware';
import { AuthService } from './module/auth/auth.service';
// import configuration from './config'

// 环境变量路径
const envFilePath = process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production'
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env', envFilePath]
  }), BlogModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
  }
}
