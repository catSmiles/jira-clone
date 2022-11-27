import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';

import { User } from 'entities';

@Entity()
class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  body: string;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date;

  // relation with User entity
  @ManyToOne(
    () => User, // is a function that returns the class of the entity with which we want to make our relationship
    user => user.comments, // is a function that returns the name of the inverse side of the relation
  )
  user: User; // this way we connect them
}

export default Comment;
