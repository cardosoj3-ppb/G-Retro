import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';

import { MessageEntity } from '../message';
import { SectionEntity } from '../section';

@Entity({ schema: 'app', name: 'board' })
export class BoardEntity {
  @PrimaryColumn({ type: 'character varying', name: 'id' })
  public id!: string;

  @Column({ type: 'character varying', name: 'title' })
  public title!: string;

  @Column({ type: 'timestamp with time zone', name: 'creation_date' })
  public creationDate!: Date;

  @OneToMany(() => MessageEntity, message => message.board, { lazy: true })
  public messages!: Promise<MessageEntity[]>;

  @ManyToMany(() => SectionEntity, { lazy: true })
  @JoinTable({
    name: 'board_section', // table name for the junction table of this relation
    joinColumn: {
      name: 'board',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'section',
      referencedColumnName: 'id',
    },
  })
  public sections!: Promise<SectionEntity[]>;
}
