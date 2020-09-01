import { Controller, Get, Param, Res } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { renderError } from '../common/render'
import { Response } from 'express'

@Controller('activity')
export class ActivityController {
  constructor(private readonly activeServie: ActivityService) {}

  @Get(':custom')
  root(@Param('custom') customUrl: string, @Res() res: Response) {
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
