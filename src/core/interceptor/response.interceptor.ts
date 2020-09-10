import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ErrorCode } from '../../constants/error';

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
    
    return next.handle().pipe(
      map(data => {
        console.log('全局响应拦截器方法返回内容后');
        console.log('data', data)

        if (typeof data === 'undefined') {
          // 请求页面
          return data;
        }

        // api接口请求
        const newData = data as any;
        // 请求成功
        if (typeof data.statusCode === 'undefined') {
          return {
              data: data,
              errorCode: ErrorCode.SUCCESS.CODE,
              message: 'success'
          };
        }
 
        // 请求失败
        let errorCode, message;
        if (ErrorCode.HasCode(newData.statusCode)) {
          errorCode = newData.statusCode;
          message = ErrorCode.CodeToMessage(errorCode);
        } else {
          errorCode = ErrorCode.ERROR.CODE;
          message = ErrorCode.ERROR.MESSAGE;
        }
        return {
          errorCode,
          message,
          data: newData.message
        };
      })
    )

    // 异常映射
    // console.log('异常映射')
    // return next.handle().pipe(catchError(err => throwError(new BadGatewayException())))
  }
}
