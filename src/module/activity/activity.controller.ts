import { Controller, Get, Param, Res, Query, UseGuards } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { renderError } from '../../common/render'
import { Response } from 'express'
import { ActivityGuard } from 'src/share/guard/activity.guard';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activeServie: ActivityService) {}

  @Get(':custom')
  @UseGuards(ActivityGuard)
  root(@Res() res: Response, @Param('custom') customUrl: string, @Query('_scnl') scnl: string) {
    const data = this.activeServie.findData(customUrl)

    if (!data) {
      return renderError(res, {
        title: '查找失败',
        message: '找不到该页面'
      })
    }

    return res.render('activity/default', data)
  }
}
