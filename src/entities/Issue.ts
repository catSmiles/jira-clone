import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import { IssueType, IssueStatus, IssuePriority } from 'constants/issues';
import { Project, Comment, User } from 'entities';

@Entity()
class Issue extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('text', { nullable: true })
  description: string | null;

  @Column('text', { nullable: true })
  descriptionText: string | null;

  @Column('varchar')
  type: IssueType;

  @Column('varchar')
  status: IssueStatus;

  @Column('varchar')
  priority: IssuePriority;

  @Column('double precision')
  position: number;

  @Column('integer', { nullable: true })
  timeSpent: number | null;

  @Column('integer', { nullable: true })
  timeRemaning: number | null;

  @Column('integer', { nullable: true })
  estimate: number | null;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date;

  @Column('integer')
  reporterId: number;

  // relation with Project entity
  @ManyToOne(
    () => Project,
    project => project.issues,
  )
  project: Project;

  @Column('integer')
  projectId: number;

  // relation with Comment entity
  @OneToMany(
    () => Comment,
    comment => comment.issue,
  )
  comments: Comment[];

  // relation with User entity
  @ManyToMany(
    () => User,
    user => user.issues,
  )
  users: User[];
}

export default Issue;
