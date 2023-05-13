import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Base } from './base.entity';
import { User } from './user.entity';

@Entity({ name: 'tasks' })
export class Task extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToOne(() => User, (user) => user.tasks, {})
  user: User;
}
