const port = 3000
const staticURL = `http://localhost:${port}`

export default {
  server: {
    port, // 端口
    cookieSecret: 'ema21ioirJikXIkLCJugmeiv', // 设置cookie加密
  },
  static: {
    staticURL,
    cssPath: `${staticURL}/static/css`,
    jsPath: `${staticURL}/static/js`,
    imgPath: `${staticURL}/static/images`,
    fontPath: `${staticURL}/static/fonts`,
  },
  database: {
    type: 'mysql',
    host: 'localhost',
    port: 3306
  },
  common: {
    appDownLoad: 'https://h5.hstong.com/download/hstong/mobile/qr-code' // 华盛通app下载
  }
}