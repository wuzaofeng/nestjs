import { Controller, Get, Param, Post, Body, Render, Response, Request } from '@nestjs/common';
import { AddBlogDto } from './blog.dto';
import { BlogService } from './blog.service'
import { ApiTags, ApiParam, ApiHeader } from '@nestjs/swagger';

@ApiTags('blog文档')
@Controller('blog')
export class BlogController {

  constructor (private blogService: BlogService) {}

  @Get()
  @Render('blog/index')
  root(@Request() req, @Response() res) {
    // 获取cookie
    console.log(req.signedCookies.name)
    // 设置cookie
    res.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true, signed: true}); 
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

  @Get('detail/:id')
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
}
