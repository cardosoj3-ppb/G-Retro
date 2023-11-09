import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'app', name: 'section' })
export class SectionEntity {
  @PrimaryColumn({ type: 'character varying', name: 'id' })
  private id: string;

  @Column({ type: 'character varying', name: 'name' })
  private name: string;

  constructor($id: string, $name: string) {
    this.id = $id;
    this.name = $name;
  }

  /**
   * Getter $id
   * @return {string}
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Setter $id
   * @param {string} value
   */
  public set $id(value: string) {
    this.id = value;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }
}
