import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/pl';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService  {

  createDb() {
    const elements = this.getElements(10);
    return {elements};
  }

  getElements(size: number): Array<any> {
    const elements = [];
    for (let i = 0; i < size; i++) {
      elements.push(this.oneElement(i+1));
    }
    return elements;
  }

  oneElement = (id: number) => {
    return {
      ...{id},
      uuid: faker.random.uuid(),
      active: faker.random.boolean(),
      name: faker.name.firstName(),
      description: faker.lorem.sentence(),
      date: faker.date.future(),
    };
  }

  constructor() { }
}
