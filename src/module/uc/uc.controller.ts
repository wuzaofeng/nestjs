import { Controller, Res, Get } from '@nestjs/common';
import { Response } from 'express'

@Controller('/uc')
export class UcController {
  @Get(['personal/data/manager', 'personal/data/manager/**'])
  async root(@Res() res: Response) {
    return res.render('personalData/index')
  }
}
