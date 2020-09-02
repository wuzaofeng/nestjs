import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // exception 当前正在处理的异常对象
    // host 是转递原始处理程序的参数
    console.log('进入全局异常过滤器 filter');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    // HttpException 基础异常类
    // 如果是自定义异常类抛出自定义status
    // 如果是内置HTTP异常类，抛出内置status内容
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR

    // 抛出错误信息
    const { message } = exception

    const msgLog = {
      errorCode: status, // 系统错误状态
      timestamp: new Date().toISOString(), // 错误日期
      path: request.url, // 错误路由
      message: '请求错误',
      data: message // 错误消息内容体
    }


    // 打印错误综合日志
    Logger.error(
      '错误信息',
      JSON.stringify(msgLog),
      'HttpExceptionFilter'
    );
    response
    .status(status)
    .json(msgLog);
  }
}
