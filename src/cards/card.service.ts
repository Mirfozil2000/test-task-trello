import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCardDto } from 'src/dto/create-card.dto';
import { UpdateCardDto } from 'src/dto/update-card.dto';
import { Card } from 'src/entities/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private cardRepository: Repository<Card>,
  ) {}

  create(createCardDto: CreateCardDto) {
    const card = this.cardRepository.create(createCardDto);
    return this.cardRepository.save(card);
  }

  findAll() {
    return this.cardRepository.find({ relations: ['column', 'comments'] });
  }

  findOne(id: number) {
    return this.cardRepository.findOne({
      where: { id },
      relations: ['column', 'comments'],
    });
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return this.cardRepository.update(id, updateCardDto);
  }

  remove(id: number) {
    return this.cardRepository.delete(id);
  }
}
