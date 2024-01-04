import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { BoardEntity } from '../board';
import { SectionEntity } from '../section';
import { UserEntity } from '../user';

@Entity({ schema: 'app', name: 'message' })
export class MessageEntity {
  @PrimaryColumn({ type: 'character varying', name: 'id' })
  public id!: string;

  @Column({ type: 'character varying', name: 'text' })
  public text!: string;

  @ManyToOne(() => UserEntity, user => user.id, { nullable: false, lazy: true })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  public user!: Promise<UserEntity>;

  @ManyToOne(() => BoardEntity, board => board.id, { lazy: true, nullable: false })
  @JoinColumn({ name: 'board', referencedColumnName: 'id' })
  public board!: Promise<BoardEntity>;

  @ManyToOne(() => SectionEntity, section => section.id, { lazy: true, nullable: false })
  @JoinColumn({ name: 'section', referencedColumnName: 'id' })
  public section!: Promise<SectionEntity>;

  @Column({ type: 'character varying', name: 'creation_date' })
  public creationDate!: Date;
}
