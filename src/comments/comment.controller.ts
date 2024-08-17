import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CreateCommentDto } from "src/dto/create-comment.dto";
import { UpdateCommentDto } from "src/dto/update-comment.dto";

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.commentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.commentService.remove(id);
  }
}