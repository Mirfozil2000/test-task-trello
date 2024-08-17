import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comment } from "src/entities/comment.entity"; // Ensure this path is correct
import { CreateCommentDto } from "../dto/create-comment.dto"; // Relative or correct alias
import { UpdateCommentDto } from "../dto/update-comment.dto"; // Relative or correct alias

@Injectable()
export class CommentService {
  constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>) {}

  async create(createCommentDto: CreateCommentDto) {
    const comment = this.commentRepository.create(createCommentDto);
    return await this.commentRepository.save(comment);
  }

  async findAll() {
    return await this.commentRepository.find({ relations: ['card'] });
  }

  async findOne(id: number) {
    return await this.commentRepository.findOne({ where: { id }, relations: ['card'] });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    await this.commentRepository.update(id, updateCommentDto);
    return this.findOne(id); // Return the updated entity
  }

  async remove(id: number) {
    const comment = await this.findOne(id);
    if (comment) {
      await this.commentRepository.remove(comment);
      return { deleted: true };
    } else {
      return { deleted: false, message: "Comment not found" };
    }
  }
}
