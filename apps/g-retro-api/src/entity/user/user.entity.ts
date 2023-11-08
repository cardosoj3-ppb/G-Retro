import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'app', name: 'user' })
export class UserEntity {
  @PrimaryColumn({ type: 'character varying', name: 'id' })
  private id: string;

  @Column({ type: 'character varying', name: 'email', unique: true })
  private email: string;

  @Column({ type: 'character varying', name: 'password' })
  private password: string;

  @Column({ type: 'character varying', name: 'first_name' })
  private firstName: string;

  @Column({ type: 'character varying', name: 'last_name' })
  private lastName: string;

  @Column({ type: 'character varying', name: 'token', nullable: true, unique: true })
  private token: string | null;

  @Column({ type: 'timestamp with time zone', name: 'creation_date' })
  private creation_date: Date;

  constructor(
    $id: string,
    $email: string,
    $password: string,
    $firstName: string,
    $lastName: string,
    $token: string | null,
    $creation_date: Date,
  ) {
    this.id = $id;
    this.email = $email;
    this.password = $password;
    this.firstName = $firstName;
    this.lastName = $lastName;
    this.token = $token;
    this.creation_date = $creation_date;
  }

  /**
   * Getter $id
   * @return {string}
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Getter $email
   * @return {string}
   */
  public get $email(): string {
    return this.email;
  }

  /**
   * Getter $password
   * @return {string}
   */
  public get $password(): string {
    return this.password;
  }

  /**
   * Getter $firstName
   * @return {string}
   */
  public get $firstName(): string {
    return this.firstName;
  }

  /**
   * Getter $lastName
   * @return {string}
   */
  public get $lastName(): string {
    return this.lastName;
  }

  /**
   * Getter $token
   * @return {string | null}
   */
  public get $token(): string | null {
    return this.token;
  }

  /**
   * Getter $creation_date
   * @return {Date}
   */
  public get $creation_date(): Date {
    return this.creation_date;
  }

  /**
   * Setter $id
   * @param {string} value
   */
  public set $id(value: string) {
    this.id = value;
  }

  /**
   * Setter $email
   * @param {string} value
   */
  public set $email(value: string) {
    this.email = value;
  }

  /**
   * Setter $password
   * @param {string} value
   */
  public set $password(value: string) {
    this.password = value;
  }

  /**
   * Setter $firstName
   * @param {string} value
   */
  public set $firstName(value: string) {
    this.firstName = value;
  }

  /**
   * Setter $lastName
   * @param {string} value
   */
  public set $lastName(value: string) {
    this.lastName = value;
  }

  /**
   * Setter $token
   * @param {string | null} value
   */
  public set $token(value: string | null) {
    this.token = value;
  }

  /**
   * Setter $creation_date
   * @param {Date} value
   */
  public set $creation_date(value: Date) {
    this.creation_date = value;
  }
}
