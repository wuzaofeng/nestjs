import { Module } from '@nestjs/common';
import { UcController } from './uc.controller';

@Module({
  controllers: [UcController]
})
export class UcModule {}
