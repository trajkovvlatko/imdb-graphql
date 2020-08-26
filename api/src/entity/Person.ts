import {Field, ObjectType} from 'type-graphql';
import Title from './Title';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from 'typeorm';

@Entity()
@ObjectType()
export default class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  personId: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({nullable: true})
  birthYear: number;

  @Field()
  @Column({nullable: true})
  deathYear: number;

  @Field()
  @Column({default: ''})
  primaryProfession: string;

  @Field(() => [Title], {nullable: true})
  @ManyToMany(() => Title, (title: Title) => title.people)
  titles: Title[];
}
