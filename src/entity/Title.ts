import {
  JoinTable,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from 'typeorm';
import Person from './Person';

@Entity()
export default class Title extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titleId: string;

  @Column()
  titleType: string;

  @Column()
  name: string;

  @Column()
  originalName: string;

  @Column({default: false})
  isAdult: boolean;

  @Column({nullable: true})
  startYear: number;

  @Column({nullable: true})
  endYear: number;

  @Column({nullable: true})
  runtimeMinutes: number;

  @Column({default: ''})
  genres: string;

  @ManyToMany(() => Person, (person: Person) => person.titles, {cascade: true})
  @JoinTable()
  people: Person[];
}
