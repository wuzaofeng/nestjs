import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  findAll () {
    return [{
      id: 1
    }, {
      id: 2
    }]
  }
}
