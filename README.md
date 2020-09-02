<!-- <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p> -->
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### 学习文档

[nestjs 英文文档](https://docs.nestjs.com/middleware)

[nestjs 中文文档](https://docs.nestjs.cn/7/firststeps)

[nestjs 中文网](https://www.itying.com/nestjs/)

[pug模板引擎](https://www.pugjs.cn/language/inheritance.html)

### nestjs 执行流程
发起请求 =》 中间件（middleware） =》守卫（guard） =》拦截器（interceptor） 
=》 管道(pipe) =》执行方法(控制器方法) =》拦截器（interceptor） 
=》请求结束

有异常，抛出异常过滤器

### 搭建

通过@nestjs/cli快捷搭建项目

```bash
npm i -g @nestjs/cli
```

创建项目之后可通过快捷命令行创建项目

```bash
npm g 
```

|  name   | alias   |
|  ----  | ----  |
| configuration  | config |
| controller  | co |
| guard  | gu |
| module  | mo |
| pipe  | pi |
| service  | s |

### 概念
#### 中间件(middleware)
路由处理程序之前调用的函数

#### 守卫(guard)
授权的控制如权限访问，角色等，是属于中间件的一种特殊处理方式，细分了出来
还有多个`ExecutionContext`对象，执行上下文

全局设置 useGlobalGuards

局部设置 UseGuards

#### 拦截器

`controller`函数前后执行

#### 管道(pipe)

1. 转换数据
2. 验证数据

#### 异常过滤器

基础内置异常

BadRequestException

UnauthorizedException

NotFoundException

ForbiddenException
等等

#### 模块化
nestjs项目分模块化，引入导出模块之后，也就会注入对应模块的服务层


### 项目目录结构

```
- public                 静态资源目录
    - css                样式文件
    - images             图片文件

- src
    - commom            公共模块
        logger          自定义日志服务

    - config            配置模块
        cfg.default     默认配置
        cfg.dev         开发环境配置
        cfg.prod        生产，测试环境配置
    
    - constants         变量参数目录
        error           错误码目录
        
    - core              核心模块
        exception       
            custom.expection 错误码异常抛出
        filters         异常过滤器日志处理
            http-exception.filter
        guard
            auth.guard  全局权限守卫，是否需要token, 或者白名单处理
        interceptor
            response.interceptor 响应拦截器处理
        middleware
            compression 响应压缩拦截器
            cookie-parser cookie解析拦截器
            cors        跨域
            csrf, helmet    安全 ??
            locals      全局配置
    
- module    模块文件
    - activity  活动模块
    - blog
    - user

app.controllor  根控制器
app.module      根模块
app.service     根服务
main            入口文件

-views
    - activity  活动模块页面
    - common    公共目录
        error   错误页面

```

### 实现功能

- [x] 通过守卫模拟拦截权限功能
- [x] 统一返回响应体
- [x] 统一错误，自定义日志输出文本
- [x] 静态资源配置
- [x] swagger 创建api文档
- [x] 模板引擎配置 pug 
- [x] 统一环境变量配置


- [x] 模拟后台可配置链接，该链接显示对应的模板界面。模板应该是固定死的。只是渲染对应的seo和内容
- [x] 通过参数请求，并设置cookies