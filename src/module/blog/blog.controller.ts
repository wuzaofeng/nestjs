import { Controller, Get, Param, Query, Post, Body, Render, Request, HttpException, HttpStatus, BadRequestException, UnauthorizedException, UseFilters } from '@nestjs/common';
// import { Request } from 'express'
import { SUCCESS } from '../../constants/error'
import { AddBlogDto } from './blog.dto';
import { BlogService } from './blog.service'
import { ApiTags, ApiParam, ApiHeader } from '@nestjs/swagger';

@ApiTags('blog文档')
@Controller('blog')
export class BlogController {

  constructor (private blogService: BlogService) {}

  @Get()
  @Render('blog/index')
  root() {
    return {
      message: 'Hello blog'
    }
  }

  @Get('getlist')
  getList () {
    const list = this.blogService.findAll()
    return {
      list
    }
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: '用户ID，唯一标识'
  })
  @ApiHeader({
    name: 'token',
    required: true,
    description: '本次请求请带上token',
  })
  getDetail(@Param('id') id: string) {
    return {
      id
    }
  }

  @Post('addBlog')
  addBlog(@Body() addBlogDto: AddBlogDto) {
    return addBlogDto
  }

  @Get('setCookies')
  setCookies(@Request() req) {
    // 不加密设置
    req.cookie('value','xxx',{maxAge:1000*60*10,httpOnly:true})
    //加密设置
    // req.cookie('value','xxx',{maxAge:1000*60*10,httpOnly:true, signed:true})
    return {
      a: 1
    }
  }
}
