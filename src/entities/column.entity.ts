import {
  Entity,
  PrimaryGeneratedColumn,
  Column as DbColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Card } from './card.entity';

@Entity()
export class BoardColumn {
  @PrimaryGeneratedColumn()
  id: number;

  @DbColumn()
  title: string;

  @ManyToOne(() => User, (user) => user.columns)
  user: User;

  @OneToMany(() => Card, (card) => card.column)
  cards: Card[];
}
