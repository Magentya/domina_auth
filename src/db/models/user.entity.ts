import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { Base } from './base.entity';

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
}
