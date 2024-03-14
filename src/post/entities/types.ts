import { IsNotEmpty, IsString } from 'class-validator';

export class Post {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  authorName: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  createdAt?: string;

  updatedAt?: string;
}
