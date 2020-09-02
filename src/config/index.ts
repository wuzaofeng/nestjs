import * as _ from 'lodash'
import defaultCfg from './cfg.default';
import developmentCfg from './cfg.dev';
import productionCfg from './cfg.prod';
import { registerAs } from '@nestjs/config';

const envConfigMap = {
  development: developmentCfg,
  production: productionCfg,
};

const Cfg = _.merge(defaultCfg, envConfigMap[process.env.NODE_ENV]);

// server配置
export const serverCfg = registerAs('server', () => (Cfg.server));

// static配置
export const staticCfg = registerAs('static', () => (Cfg.static));

// database配置
export const databaseCfg = registerAs('database', () => (Cfg.database));