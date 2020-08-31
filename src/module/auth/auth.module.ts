import { Module } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Module({
  imports: [UserService]
})
export class AuthModule {
}
