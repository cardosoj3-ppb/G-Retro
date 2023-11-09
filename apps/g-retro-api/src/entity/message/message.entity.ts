import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'app', name: 'message' })
export class MessageEntity {
  @PrimaryColumn({ type: 'character varying', name: 'id' })
  private id: string;

  @Column({ type: 'character varying', name: 'text' })
  private text: string;

  @Column({ type: 'character varying', name: 'user' })
  private user: string;

  @Column({ type: 'character varying', name: 'board' })
  private board: string;

  @Column({ type: 'character varying', name: 'section' })
  private section: string;

  @Column({ type: 'character varying', name: 'creation_date' })
  private creationDate: Date;

  constructor($id: string, $text: string, $user: string, $board: string, $section: string, $creationDate: Date) {
    this.id = $id;
    this.text = $text;
    this.user = $user;
    this.board = $board;
    this.section = $section;
    this.creationDate = $creationDate;
  }

  /**
   * Getter $id
   * @return {string}
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Getter $text
   * @return {string}
   */
  public get $text(): string {
    return this.text;
  }

  /**
   * Getter $user
   * @return {string}
   */
  public get $user(): string {
    return this.user;
  }

  /**
   * Getter $board
   * @return {string}
   */
  public get $board(): string {
    return this.board;
  }

  /**
   * Getter $section
   * @return {string}
   */
  public get $section(): string {
    return this.section;
  }

  /**
   * Getter $creationDate
   * @return {Date}
   */
  public get $creationDate(): Date {
    return this.creationDate;
  }

  /**
   * Setter $id
   * @param {string} value
   */
  public set $id(value: string) {
    this.id = value;
  }

  /**
   * Setter $text
   * @param {string} value
   */
  public set $text(value: string) {
    this.text = value;
  }

  /**
   * Setter $user
   * @param {string} value
   */
  public set $user(value: string) {
    this.user = value;
  }

  /**
   * Setter $board
   * @param {string} value
   */
  public set $board(value: string) {
    this.board = value;
  }

  /**
   * Setter $section
   * @param {string} value
   */
  public set $section(value: string) {
    this.section = value;
  }

  /**
   * Setter $creationDate
   * @param {Date} value
   */
  public set $creationDate(value: Date) {
    this.creationDate = value;
  }
}
