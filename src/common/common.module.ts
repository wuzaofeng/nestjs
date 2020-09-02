import { Module } from '@nestjs/common';
import { MyLoggerService } from './logger.service';

@Module({
    imports: [],
    controllers: [],
    providers: [
      MyLoggerService
    ],
    exports: [
      MyLoggerService
    ],
})
export class CommonModule {}