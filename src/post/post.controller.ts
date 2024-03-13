import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postServer: PostService) {}

  @Get()
  index() {
    return this.postServer.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.postServer.findById(id);
  }

  @Post()
  addPost(@Body() createPostDto: CreatePostDto) {
    return this.postServer.addPost(createPostDto);
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postServer.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postServer.deletePost(id);
  }
}
