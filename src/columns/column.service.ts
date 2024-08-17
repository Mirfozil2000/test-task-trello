import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateColumnDto } from 'src/dto/create-column.dto';
import { UpdateColumnDto } from 'src/dto/update-column.dto';
import { BoardColumn } from 'src/entities/column.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(BoardColumn)
    private columnRepository: Repository<BoardColumn>,
  ) {}

  create(createColumnDto: CreateColumnDto) {
    const column = this.columnRepository.create(createColumnDto);
    return this.columnRepository.save(column);
  }

  findAll() {
    return this.columnRepository.find({ relations: ['cards'] });
  }

  findOne(id: number) {
    return this.columnRepository.findOne({
      where: { id },
      relations: ['cards'],
    });
  }

  update(id: number, updateColumnDto: UpdateColumnDto) {
    return this.columnRepository.update(id, updateColumnDto);
  }

  remove(id: number) {
    return this.columnRepository.delete(id);
  }
}
