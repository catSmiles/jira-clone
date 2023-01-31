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

import is from 'utils/validation';

@Entity()
class Project extends BaseEntity {
  static validations = {
    // imagine properties was validate: name, url, category
    name: [is.required(), is.maxLength(100)],
    url: is.url(),
    category: [is.required(), is.oneOf(Object.values(ProjectCategory))],
  };

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
