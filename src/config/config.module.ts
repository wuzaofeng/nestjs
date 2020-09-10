import { ConfigModule } from '@nestjs/config';
import loadConfig from './cfg'

export default ConfigModule.forRoot({
  isGlobal: true,
  load: loadConfig
})