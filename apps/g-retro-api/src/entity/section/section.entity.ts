import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';

import { BoardEntity } from '../board';
import { MessageEntity } from '../message';

@Entity({ schema: 'app', name: 'section' })
export class SectionEntity {
  @PrimaryColumn({ type: 'character varying', name: 'id' })
  public id!: string;

  @Column({ type: 'character varying', name: 'name' })
  public name!: string;

  @OneToMany(() => MessageEntity, message => message.section, { lazy: true })
  public messages!: Promise<MessageEntity[]>;

  @ManyToMany(() => BoardEntity, { lazy: true })
  @JoinTable({
    name: 'board_section', // table name for the junction table of this relation
    joinColumn: {
      name: 'section',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'board',
      referencedColumnName: 'id',
    },
  })
  public boards!: Promise<BoardEntity[]>;
}
