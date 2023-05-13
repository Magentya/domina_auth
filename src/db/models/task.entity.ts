import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Base } from './base.entity';
import { User } from './user.entity';

@Entity({ name: 'tasks' })
export class Task extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'boolean', default: false })
  completed: boolean;

  @ManyToOne(() => User, (user) => user.tasks, {
    nullable: false,
  })
  user: User;
}
