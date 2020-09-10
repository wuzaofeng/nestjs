import * as _ from 'lodash'
import defaultCfg from './cfg.default';
import developmentCfg from './cfg.dev';
import productionCfg from './cfg.prod';

import { registerAs } from '@nestjs/config';
import betaCfg from './cfg.beta';
import dailyCfg from './cfg.daily';

const envConfigMap = {
  development: developmentCfg,
  production: productionCfg,
  beta: betaCfg,
  daily: dailyCfg
};

const Cfg = _.merge(defaultCfg, envConfigMap[process.env.NODE_ENV]);

// server配置
const serverCfg = registerAs('server', () => (Cfg.server));

// static配置
const staticCfg = registerAs('static', () => (Cfg.static));

// database配置
const databaseCfg = registerAs('database', () => (Cfg.database));

// common配置
const commonCfg = registerAs('common', () => (Cfg.common));

export default [
  serverCfg,
  commonCfg,
  staticCfg,
  databaseCfg
]
