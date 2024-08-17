import { Entity, PrimaryGeneratedColumn, Column as DbColumn, ManyToOne } from 'typeorm';
import { Card } from './card.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @DbColumn()
  text: string;

  @ManyToOne(() => Card, card => card.comments)
  card: Card; // Use 'card' to represent the relationship
}
