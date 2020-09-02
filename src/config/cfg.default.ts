const port = 3000
const staticURL = `http://192.168.67.32:${port}`

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
  }
}