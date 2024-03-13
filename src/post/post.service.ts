import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schema/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }

  async findById(id: string): Promise<Post> {
    return await this.postModel.findById(id);
  }

  async addPost(createPostDto: CreatePostDto): Promise<Post> {
    return await this.postModel.create(createPostDto);
  }

  async updatePost(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    return await this.postModel.findByIdAndUpdate(id, updatePostDto);
  }

  async deletePost(id: string) {
    return await this.postModel.findByIdAndDelete(id);
  }
}
