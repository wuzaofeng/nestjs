import {
    Controller, Get, Render
} from '@nestjs/common';

@Controller()
export class CommonController {

  @Get('/common/downloadApp')
  @Render('/activity/download')
  download() {
    console.log('下载页面')
  }
}