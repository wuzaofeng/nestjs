import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './module/blog/blog.module';
import { LoggerMiddleware } from './share/middleware/logger.middleware';
import { LoginModule } from './module/login/login.module';
import configuration from './config'

console.log(configuration())

// 环境变量路径
const envFilePath = process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production'
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env', envFilePath]
  }), BlogModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
  }
}
