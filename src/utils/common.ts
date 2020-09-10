import { Request } from 'express'
// 判断是否是在app内
export function IsInApp (req: Request): boolean {
  const userAgent = req.headers['user-agent'].toLowerCase()
  return userAgent.indexOf('hst') !== -1
}