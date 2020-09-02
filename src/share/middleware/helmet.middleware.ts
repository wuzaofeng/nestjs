import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetMiddleware implements NestMiddleware {
    private helmet: any;

    constructor() {
      this.helmet = helmet();
    }

    use(request: Request, response: Response, next: () => void) {
      const req: any = request;
      const res: any = response;

      this.helmet(req, res, next);
    }
}