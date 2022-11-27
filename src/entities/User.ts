import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';

import { Comment } from 'entities';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @Column('varchar', { length: 2000 })
  avatarUrl: string;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date;

  // relation with Comment entity
  @OneToMany(
    () => Comment, // is a function that returns the class of the entity with which we want to make our relationship
    comment => comment.user, // is a function that returns the name of the inverse side of the relation
  )
  comments: Comment[]; // this way we connect them
}

export default User;
