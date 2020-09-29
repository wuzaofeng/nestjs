import { Injectable, NestMiddleware } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
export class ProxyMiddleware implements NestMiddleware {
  private proxy;
  constructor () {
    const options = {
      target: 'http://localhost:8080', // target host
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
      pathRewrite: {
        '^/api/uc': '/uc',
        '^/api/passport': '/passport'
      },
      router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        // 'dev.localhost:3000': 'http://localhost:8000',
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log(
          `[NestMiddleware]: Proxying ${req.method} request originally made to '${req.originalUrl}'...`
        );
      }
    };

    this.proxy = createProxyMiddleware('/api', options)
  }
  use(req: any, res: any, next: () => void) {
    this.proxy(req, res, next);
  }
}
