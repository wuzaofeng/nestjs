import { Injectable, NestMiddleware, } from '@nestjs/common';
import { MyLoggerService } from '../../common/logger.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LocalsMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: MyLoggerService,
  ) {}

  use(request: Request, response: Response, next: () => void) {
    const req = request as any;
    const res = response as any;

    const staticCfg = this.configService.get('static')
    console.log('static', staticCfg)
    console.log(typeof staticCfg)
    res.locals = {
      ...staticCfg
    }

    next();
  }
}