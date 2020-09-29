import { Injectable, NestMiddleware } from '@nestjs/common';
import { MyLoggerService } from '../../common/logger.service';
import { ConfigService } from '@nestjs/config';
import { IsInApp } from 'src/utils/common';

@Injectable()
export class LocalsMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: MyLoggerService,
  ) {}

  use(request: Request, response: Response, next: () => void) {
    const req = request as any;
    const res = response as any;

    const staticCfg = this.configService.get('static') // 静态文件路径
    const commonCfg = this.configService.get('common') // 公共配置

    // 判断是不是在app内
    const isApp = IsInApp(req)

    res.locals = {
      ...staticCfg,
      ...commonCfg,
      isApp
    }

    next();
  }
}