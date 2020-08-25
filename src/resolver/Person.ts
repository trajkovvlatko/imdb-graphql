import {Resolver, Query, Arg, Int} from 'type-graphql';
import Person from '../entity/Person';

@Resolver(Person)
export default class PersonResolver {
  @Query(() => Person, {nullable: true})
  person(@Arg('id', () => Int) id: number): Promise<Person> {
    return Person.findOne(id, {
      relations: ['titles'],
    });
  }

  @Query(() => [Person], {nullable: true})
  people(
    @Arg('take', () => Int, {nullable: true}) take: number | null,
    @Arg('skip', () => Int, {nullable: true}) skip: number | null,
  ): Promise<Person[]> {
    if (!take || take > 1000 || take < 1) take = 10;
    if (!skip || skip < 0) skip = 0;

    return Person.find({
      relations: ['titles'],
      take,
      skip,
      order: {
        id: 'ASC',
      },
    });
  }
}
