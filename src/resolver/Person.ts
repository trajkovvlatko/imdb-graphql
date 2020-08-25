import {Resolver, Query, Arg, Int} from 'type-graphql';
import Person from '../entity/Person';

@Resolver(Person)
export default class PersonResolver {
  @Query(() => Person, {nullable: true})
  async person(@Arg('id', () => Int) id: number): Promise<Person> {
    return Person.findOne(id, {
      relations: ['titles'],
    });
  }
}
