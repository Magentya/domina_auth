import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Base } from './base.entity';
import { Task } from './task.entity';

@Entity({ name: 'users' })
export class User extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 80, unique: true })
  username: string;

  @Column({ type: 'varchar', unique: true })
  mail: string;

  @Column({ type: 'varchar', nullable: true })
  password: string;

  @OneToMany(() => Task, (task) => task.user, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  tasks: Task[];
}
