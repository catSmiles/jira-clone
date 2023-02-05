import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';

import is from 'utils/validation';
import { Issue, User } from '.';

@Entity()
class Comment extends BaseEntity {
  static validations = {
    body: [is.required(), is.maxLength(50000)],
  };

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  body: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  // relation with User entity
  @ManyToOne(
    () => User, // is a function that returns the class of the entity with which we want to make our relationship
    user => user.comments, // is a function that returns the name of the inverse side of the relation
  )
  user: User; // this way we connect them

  @Column('integer')
  userId: number;

  // relation with Issue
  @ManyToOne(
    () => Issue,
    issue => issue.comments,
    { onDelete: 'CASCADE' },
  )
  issue: Issue;

  @Column('integer')
  issueId: number;
}

export default Comment;
