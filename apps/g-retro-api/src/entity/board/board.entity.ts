import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'app', name: 'board' })
export class BoardEntity {
  @PrimaryColumn({ type: 'character varying', name: 'id' })
  private id: string;

  @Column({ type: 'character varying', name: 'title' })
  private title: string;

  @Column({ type: 'timestamp with time zone', name: 'creation_date' })
  private creationDate: Date;

  constructor($id: string, $title: string, $creationDate: Date) {
    this.id = $id;
    this.title = $title;
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
   * Getter $title
   * @return {string}
   */
  public get $title(): string {
    return this.title;
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
   * Setter $title
   * @param {string} value
   */
  public set $title(value: string) {
    this.title = value;
  }

  /**
   * Setter $creationDate
   * @param {Date} value
   */
  public set $creationDate(value: Date) {
    this.creationDate = value;
  }
}
