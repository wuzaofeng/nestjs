import { Injectable, NestMiddleware } from '@nestjs/common';
import * as compression from 'compression';
import { MyLoggerService } from 'src/common/logger.service';

@Injectable()
export class CompressionMiddleware implements NestMiddleware {
  private compression: any;

  constructor(private readonly logger: MyLoggerService) {
    this.compression = compression();
  }

  use(request: Request, response: Response, next: () => void) {
    const req: any = request;
    const res: any = response;

    this.logger.info({
      message: 'compression中间件'
    });

    this.compression(req, res, next);
  }
}