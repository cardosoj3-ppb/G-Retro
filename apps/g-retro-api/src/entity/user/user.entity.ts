import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

import { MessageEntity } from '../message';

@Entity({ schema: 'app', name: 'user' })
export class UserEntity {
  @PrimaryColumn({ type: 'character varying', name: 'id' })
  public id!: string;

  @Column({ type: 'character varying', name: 'email', unique: true })
  public email!: string;

  @Column({ type: 'character varying', name: 'password' })
  public password!: string;

  @Column({ type: 'character varying', name: 'first_name' })
  public firstName!: string;

  @Column({ type: 'character varying', name: 'last_name' })
  public lastName!: string;

  @Column({ type: 'character varying', name: 'token', nullable: true, unique: true })
  public token!: string | null;

  @Column({ type: 'timestamp with time zone', name: 'creationDate' })
  public creationDate!: Date;

  @OneToMany(() => MessageEntity, message => message.user, { lazy: true })
  public messages!: Promise<MessageEntity[]>;
}
