import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): Promise<boolean> | boolean {
    console.log('进入全局权限守卫 guard')
    return true
    // 获取请求对象
    const request = context.switchToHttp().getRequest();
    // 获取请求头中的token字段
    const token = context.switchToRpc().getData().headers.token;
    console.log('token', token)
    // 如果白名单内的路由就不拦截直接通过
    if (this.isWhiteRoute(this.whiteRoutes, request.url)) {
      console.log('白名单内', request.url)
      return true
    }

    // 验证token的合法性
    if (token) {
      // 验证合法性
      console.log('验证合法性');
      return true
    } else {
      // 既不是白名单，又没有token
      throw new HttpException('没有权限访问, 请登录', HttpStatus.UNAUTHORIZED)
    }
  }

  // 白名单数组
  private whiteRoutes: string[] = [
    '/blog/getlist'
  ]

  // 一年该次请求是否在白名单内
  private isWhiteRoute(routers: string[], url: string): boolean {
    return routers.includes(url)
  }
}