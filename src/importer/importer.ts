import {createReadStream} from 'fs';
import * as path from 'path';
import * as es from 'event-stream';
import {createConnection} from 'typeorm';
import TitleRow from './rows/TitleRow';
import PersonRow from './rows/PersonRow';

interface IPath {
  type: string;
  path: string;
}

export default class Importer {
  paths = [
    {
      type: 'title',
      path: '../../data/title.basics.tsv',
    },
    {
      type: 'person',
      path: '../../data/name.basics.tsv',
    },
  ];

  async run(): Promise<void> {
    await createConnection();
    this.readFile();
  }

  readFile(): void {
    const p = this.paths.shift();
    console.log(`Now importing ${p.type} from ${p.path}...`);
    const filePath = path.join(__dirname, p.path);

    const file = createReadStream(filePath)
      .pipe(es.split())
      .pipe(
        es.mapSync(async (line: string) => {
          if (line.includes('nconst') || line.includes('tconst')) {
            return;
          }
          file.pause();
          if (p.type === 'title') {
            const row = new TitleRow(line);
            await row.save();
          } else if (p.type === 'person') {
            const row = new PersonRow(line);
            await row.save();
          } else {
            throw 'Invalid file.';
          }
          file.resume();
        }),
      )

      .on('end', () => {
        console.log(`Done with ${p.type}`);
        if (this.paths.length > 0) {
          this.readFile();
        } else {
          console.log('Import done.');
          process.exit(0);
        }
      });
  }
}
