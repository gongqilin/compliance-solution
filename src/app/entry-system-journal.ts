import { Entry } from './entry';

export class EntrySystemJournal extends Entry {
  taxFree: number;
  taxed: number;
  createBy: string;
}
