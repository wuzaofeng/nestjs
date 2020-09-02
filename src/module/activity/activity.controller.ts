import { Controller, Get, Param, Res, UseGuards, Query } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { renderError } from '../../common/render'
import { Response } from 'express'
import { ActivityGuard } from 'src/core/guard/activity.guard';

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

    res.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true}); 

    console.log(scnl)
    return res.render('activity/default', data)
  }
}
