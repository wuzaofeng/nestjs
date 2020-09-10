import { Module, HttpModule } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';

@Module({
  imports: [HttpModule],
  controllers: [ActivityController],
  providers: [ActivityService]
})
export class ActivityModule {}
