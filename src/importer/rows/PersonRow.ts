import {In} from 'typeorm';
import Person from '../../entity/Person';
import Title from '../../entity/Title';
import {numOrNull} from '../helpers';

interface IRow {
  personId: string;
  name: string;
  birthYear?: number;
  deathYear?: number;
  primaryProfession: string;
  titleIds: string[];
}

export default class PersonRow {
  obj: IRow;

  constructor(line: string) {
    this.obj = this.processLine(line);
  }

  processLine(row: string): IRow {
    const parts: string[] = row.split('\t');
    const titleIds = parts[5].split(',').map((t: string) => t.trim());
    return {
      personId: parts[0],
      name: parts[1],
      birthYear: numOrNull(parts[2]),
      deathYear: numOrNull(parts[3]),
      primaryProfession: parts[4],
      titleIds,
    };
  }

  async save(): Promise<Person> {
    const row = this.obj;

    const person = new Person();
    person.personId = row.personId;
    person.name = row.name;
    person.birthYear = row.birthYear;
    person.deathYear = row.deathYear;
    person.primaryProfession = row.primaryProfession;

    const titles = await Title.find({
      where: {
        titleId: In(row.titleIds),
      },
    });
    person.titles = titles;

    await person.save();
    return person;
  }
}
