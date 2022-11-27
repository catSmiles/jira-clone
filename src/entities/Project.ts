import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { User, Issue } from 'entities';
import { ProjectCategory } from 'constants/projects';

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

  // relation with Issue entity
  @OneToMany(
    () => Issue,
    issue => issue.project,
  )
  issues: Issue[];
}

export default Project;
