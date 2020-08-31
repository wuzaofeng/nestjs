import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserLoginDTO } from './user.dto';

@Controller('user')
export class UserController {
  @Get()
  getLogin () {
    return {
      id: 10
    }
  }

  @Post('login')
  login(@Body() userLogin: UserLoginDTO) {
    return userLogin
  }
}
