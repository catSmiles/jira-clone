import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { User } from 'entities';
import { ProjectCategory } from 'constants/Projects';

@Entity()
class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar', { nullable: true })
  url: string | null;

  @Column('text', { nullable: true })
  description: string | null;

  @Column('varchar')
  category: ProjectCategory;

  @CreateDateColumn({ type: 'timestamp' })
  crateAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date;

  // relation with User entity
  @OneToMany(
    () => User,
    user => user.project,
  )
  users: User[];
}

export default Project;
