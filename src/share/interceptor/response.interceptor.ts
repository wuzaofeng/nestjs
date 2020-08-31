import { CallHandler, ExecutionContext, Injectable, NestInterceptor, BadGatewayException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SUCCESS } from 'src/constants/error';

// 全局响应拦截器，统一返回体内容
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    // tap() 可观察序列的正常或异常终止时调用函数
    // console.log('Before...');
    // const now = Date.now();
    // console.log(next.handle())
    // return next.handle().pipe(
    //   tap(() => console.log(`After... ${Date.now() - now}ms`)),
    // );
    

    // 响应映射 map

    // 解析ExecutionContext
    // const ctx = context.switchToHttp();
    // const request = ctx.getRequest();
    
    // return next.handle().pipe(
    //   map(data => {
    //     console.log('全局响应拦截器方法返回内容后');
    //     return {
    //       statusCode: SUCCESS,
    //       timestamp: new Date().toISOString(),
    //       path: request.url,
    //       message: '请求成功',
    //       data
    //     }
    //   })
    // )

    // 异常映射
    console.log('异常映射')
    return next.handle().pipe(catchError(err => throwError(new BadGatewayException())))
  }
}
