import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
  ManyToOne,
  ManyToMany,
  RelationId,
} from 'typeorm';

import is from 'utils/validation';
import { Comment, Project, Issue } from '.';

@Entity()
class User extends BaseEntity {
  static validations = {
    name: [is.required(), is.maxLength(100)],
    email: [is.required(), is.email(), is.maxLength(200)],
  };

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @Column('varchar', { length: 2000 })
  avatarUrl: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  // relation with Comment entity
  @OneToMany(
    () => Comment, // is a function that returns the class of the entity with which we want to make our relationship
    comment => comment.user, // is a function that returns the name of the inverse side of the relation
  )
  comments: Comment[]; // this way we connect them

  // relation with Project entity
  @ManyToOne(
    () => Project,
    project => project.users,
  )
  project: Project;

  // relation with Issue entity
  @ManyToMany(
    () => Issue,
    issue => issue.users,
  )
  issues: Issue[];

  @RelationId((user: User) => user.project) // Loads id (or ids) of specific relations into properties. For example, if you have a many-to-one Project in your User entity, you can have a new project id by marking a new property with @RelationId.
  projectId: number;
}

export default User;
