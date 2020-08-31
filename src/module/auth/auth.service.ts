import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  // 验证身份
  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username)
    if (user && user.password === password) {
      return user;
    } else {
      return null;
    }
  }
}
