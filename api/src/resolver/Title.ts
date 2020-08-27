import {Resolver, Query, Arg, Int} from 'type-graphql';
import Title from '../entity/Title';
import {Raw} from 'typeorm';

@Resolver(Title)
export default class TitleResolver {
  @Query(() => Title, {nullable: true})
  title(@Arg('id', () => Int) id: number): Promise<Title> {
    return Title.findOne(id, {
      relations: ['people'],
    });
  }

  @Query(() => [Title], {nullable: true})
  titles(
    @Arg('take', () => Int, {nullable: true}) take: number | null,
    @Arg('skip', () => Int, {nullable: true}) skip: number | null,
  ): Promise<Title[]> {
    if (!take || take > 1000 || take < 1) take = 10;
    if (!skip || skip < 0) skip = 0;

    return Title.find({
      relations: ['people'],
      take,
      skip,
      order: {
        id: 'ASC',
      },
    });
  }

  @Query(() => [Title], {nullable: true})
  findTitles(@Arg('name', () => String) name: string): Promise<Title[]> {
    return Title.find({
      where: {
        name: Raw((n) => `${n} ILIKE '%${name}%'`),
      },
    });
  }
}
