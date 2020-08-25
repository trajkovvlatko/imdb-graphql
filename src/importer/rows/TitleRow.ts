import Title from '../../entity/Title';
import {numOrNull} from '../helpers';

interface IRow {
  titleId: string;
  titleType: string;
  name: string;
  originalName: string;
  isAdult: boolean;
  startYear?: number;
  endYear?: number;
  runtimeMinutes?: number;
  genres: string;
}

export default class TitleRow {
  obj: IRow;

  constructor(line: string) {
    this.obj = this.processLine(line);
  }

  processLine(line: string): IRow {
    const parts: string[] = line.split('\t');
    return {
      titleId: parts[0],
      titleType: parts[1],
      name: parts[2],
      originalName: parts[3] ? parts[3] : parts[2],
      isAdult: !!parts[4],
      startYear: numOrNull(parts[5]),
      endYear: numOrNull(parts[6]),
      runtimeMinutes: numOrNull(parts[7]),
      genres: parts[8],
    };
  }

  async save(): Promise<Title> {
    const row = this.obj;

    const title = new Title();
    title.titleType = row.titleType;
    title.titleId = row.titleId;
    title.name = row.name;
    title.originalName = row.originalName;
    title.genres = row.genres;
    title.startYear = row.startYear;
    title.endYear = row.endYear;
    title.runtimeMinutes = row.runtimeMinutes;
    await title.save();
    return title;
  }
}
