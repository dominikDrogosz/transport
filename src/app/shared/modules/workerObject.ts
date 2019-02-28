import {DocumentElement} from './documentElement';

export interface WorkerObject {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumbers: Array<string>;
  documents: Array<DocumentElement>;
}
