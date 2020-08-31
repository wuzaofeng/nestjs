import { ApiProperty } from '@nestjs/swagger';

export class AddBlogDto {
  @ApiProperty()
  username: string

  @ApiProperty()
  age: number;
  
  @ApiProperty()
  sex: string
}
