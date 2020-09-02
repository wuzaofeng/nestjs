import { Injectable } from '@nestjs/common';

@Injectable()
export class ActivityService {
  // 通过传入参数，查找数据
  findData (custom: string) {
    // 通过查找数据库数据
    const data = this.dataList.find((item) => item.seoUrl === custom)

    return data
  }

  public dataList: Array<any> = [{
    id: 1,
    seoUrl: 'hk-stocks-ipo-nfsq',
    title: '农夫山泉赴港上市',
    description: '农夫山泉股份有限公司成立于1996年，中国饮料20强之一，是在中国市场上同',
    keywords: '港股,ipo,新股上市,打新',
    content: '<p>农夫山泉股份有限公司成立于1996年，中国饮料20强之一，是在中国市场上同农夫山泉股份有限公司成立于19</p><p>农夫山泉股份有限公司成立于1996年，中国饮料20强之一，是在中国市场上同农夫山泉股份有限公司成立于19</p><p>农夫山泉股份有限公司成立于1996年，中国饮料20强之一，是在中国市场上同农夫山泉股份有限公司成立于19</p>',
    images: [
      '/img.png'
    ]
  }]
}
