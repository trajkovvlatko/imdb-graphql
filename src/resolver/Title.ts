import {Resolver, Query, Arg, Int} from 'type-graphql';
import Title from '../entity/Title';

@Resolver(Title)
export default class TitleResolver {
  @Query(() => Title, {nullable: true})
  async title(@Arg('id', () => Int) id: number): Promise<Title> {
    return Title.findOne(id, {
      relations: ['people'],
    });
  }
}
