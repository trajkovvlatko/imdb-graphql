import {Field, ObjectType} from 'type-graphql';
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
@ObjectType()
export default class Title extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  titleId: string;

  @Column()
  @Field()
  titleType: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  originalName: string;

  @Column({default: false})
  @Field()
  isAdult: boolean;

  @Column({nullable: true})
  @Field({nullable: true})
  startYear: number;

  @Column({nullable: true})
  @Field({nullable: true})
  endYear: number;

  @Column({nullable: true})
  @Field({nullable: true})
  runtimeMinutes: number;

  @Column({default: ''})
  @Field()
  genres: string;

  @Field(() => [Person], {nullable: true})
  @ManyToMany(() => Person, (person: Person) => person.titles, {cascade: true})
  @JoinTable()
  people: Person[];
}
