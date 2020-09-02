import { Injectable, NestMiddleware } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class CookieParserMiddleware implements NestMiddleware {
  private cookieParser: any;

  constructor(
    private readonly configService: ConfigService,
  ) {
    const secret = this.configService.get<string>('server.cookieSecret')
    this.cookieParser = cookieParser(secret);
  }

  use(request: Request, response: Response, next: () => void) {
    const req: any = request;
    const res: any = response;
    console.log(this.configService)

    this.cookieParser(req, res, next);
  }
}