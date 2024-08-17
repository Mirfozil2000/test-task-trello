import {
  Entity,
  PrimaryGeneratedColumn,
  Column as DbColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BoardColumn } from './column.entity';
import { Comment } from './comment.entity'; // Импортируем сущность Comment

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @DbColumn()
  title: string;

  @ManyToOne(() => BoardColumn, (column) => column.cards)
  column: BoardColumn;

  @OneToMany(() => Comment, (comment) => comment.card) // Добавляем связь OneToMany
  comments: Comment[];
}
