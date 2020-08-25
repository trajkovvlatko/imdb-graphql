import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from 'typeorm';

import Title from './Title';

@Entity()
export default class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  personId: string;

  @Column()
  name: string;

  @Column({nullable: true})
  birthYear: number;

  @Column({nullable: true})
  deathYear: number;

  @Column({default: ''})
  primaryProfession: string;

  @ManyToMany(() => Title, (title: Title) => title.people)
  titles: Title[];
}
