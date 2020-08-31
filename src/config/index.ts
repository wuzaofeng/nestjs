import devConfig from './dev.config'
import proConfig from './pro.config'

const env = process.env.NODE_ENV || 'development'

const configs = {
  development: devConfig,
  production: proConfig
}

export default () => configs[env]
