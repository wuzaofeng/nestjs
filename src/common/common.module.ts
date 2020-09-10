import { Module } from '@nestjs/common';
import { MyLoggerService } from './logger.service';
import { CommonController } from './common.controller';

@Module({
  controllers: [CommonController],
  providers: [
    MyLoggerService
  ],
  exports: [
    MyLoggerService
  ]
})
export class CommonModule {}