import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { Observable } from 'rxjs';

@Injectable()
export class ActivityService {
  constructor (private readonly httpService: HttpService) {}
  // 通过传入参数，查找数据
  findData (custom: string) {
    // 通过查找数据库数据
    const data = this.dataList.find((item) => item.seoUrl === custom)

    return data
  }

  async findSeoData () {
    const response: any = await this.httpService.get('https://hddaily.hstong.com/rest/ipo/marketing/promotion/03cb8bdc45fe4b5ebb32c65ea58a8fed')
    console.log('response', response)
    return response.data
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
