import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/pl';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService  {
  elements = [];

  createDb() {
    this.newElements(10);
    return {
      elements: this.elements
    };
  }

  newElements(size: number) {
    for (let i = 1; i <= size; i++) {
      this.elements.push(this.oneElement());
    }
  }

  oneElement = () => {
    const id = this.elements.length + 1;
    return {
      ...{id},
      uuid: faker.random.uuid(),
      active: faker.random.boolean(),
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      description: faker.lorem.sentence(),
      date: faker.date.future(),
    };
  }

  constructor() { }
}
