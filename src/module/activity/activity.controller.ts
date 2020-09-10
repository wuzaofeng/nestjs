import { Controller, Get, Param, Res, UseGuards, Query, Req } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { renderError } from '../../common/render'
import { Response, Request } from 'express'
import { ActivityGuard } from 'src/core/guard/activity.guard';
import { retry } from 'rxjs/operators';

@Controller('activity')
export class ActivityController {
  constructor(
    private readonly activeServie: ActivityService
  ) {}

  @Get('/marketing/promotion/:custom')
  @UseGuards(ActivityGuard)
  async root(@Res() res: Response, @Req() req: Request, @Param('custom') customUrl: string, @Query('_scnl') scnl: string) {
    const data = this.activeServie.findData(customUrl)
    
    if (!data) {
      return renderError(res, {
        title: '查找失败',
        message: '找不到该页面'
      })
    }
    res.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true}); 

    return res.render('activity/default', data)
  }

  @Get('/marketing/promotion2/:custom')
  async test(@Param('custom') custom: string) {
    console.log(custom)
    const data2 = await this.activeServie.findSeoData()
    console.log('data2data', data2)
    return data2
  }
}
