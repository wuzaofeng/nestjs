import { Response } from 'express'
// 共用找不到页面
export function renderError(res: Response, data) {
  return res.render('common/error', data)
}