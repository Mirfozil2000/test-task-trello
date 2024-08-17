import {
  Entity,
  PrimaryGeneratedColumn,
  Column as DbColumn,
  OneToMany,
} from 'typeorm';
import { BoardColumn } from './column.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @DbColumn({ unique: true })
  email: string;

  @DbColumn()
  password: string;

  @OneToMany(() => BoardColumn, (column) => column.user)
  columns: BoardColumn[];
}
