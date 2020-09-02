import * as csurf from 'csurf';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CSRFMiddleware implements NestMiddleware {
    private csurf: any;
    constructor() {
      this.csurf = csurf({
        cookie: true,
        ignoreMethods: ['GET', 'HEAD', 'OPTIONS'],
      });
    }
    use(request: Request, response: Response, next: () => void) {
      const req: any = request;
      const res: any = response;

      this.csurf(req, res, next);
    }
}