import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/en';
import {WorkerObject} from './shared/modules/workerObject';
import {OrderStatus, TransportOrder} from './shared/modules/transportOrder';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService {
  elements = []; // for test only
  workersExamples: Array<WorkerObject> = [
    {
      id: faker.random.uuid(),
      email: faker.internet.email(),
      lastName: faker.name.lastName(),
      name: faker.name.firstName(),
      phoneNumbers: [faker.phone.phoneNumber(), faker.phone.phoneNumber()],
      documents: [{
        type: 'ID',
        number: 'AXX 00000',
        validityDate: faker.date.future()
      }, {
        type: 'Driver license',
        number: 'ZXX 10101',
        validityDate: faker.date.future()
      }]
    },
    {
      id: faker.random.uuid(),
      lastName: faker.name.lastName(),
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phoneNumbers: [faker.phone.phoneNumber(), faker.phone.phoneNumber()],
      documents: [{
        type: 'ID',
        number: 'BXX 00055',
        validityDate: faker.date.future()
      }, {
        type: 'Driver license',
        number: 'ZCC 01010',
        validityDate: faker.date.future()
      },]
    }, {
      id: faker.random.uuid(),
      lastName: faker.name.lastName(),
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phoneNumbers: [faker.phone.phoneNumber()],
      documents: [{
        type: 'ID',
        number: 'OOO 99999',
        validityDate: faker.date.future()
      }, {
        type: 'Driver license',
        number: 'RTY 12345',
        validityDate: faker.date.future()
      },]
    }
  ];
  transportOrders: Array<TransportOrder> = this.createOrders(10);

  createDb() {
    this.newElements(10);
    return {
      elements: this.elements,
      workers: this.workersExamples,
      orders: this.transportOrders
    };
  }

  createOrders(size: number): Array<TransportOrder> {
    const orders = [];
    for (let i = 0; i < size; i++) {
      orders.push(this.newTransportOrder());
    }
    return orders;
  }

  fakeOrderStatus(): OrderStatus {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    switch (randomNumber) {
      case 1:
        return 'DONE';
      case 2:
        return 'IN PROGRESS';
      case 3:
      default:
        return 'NEW';
    }
  }

  newTransportOrder(): TransportOrder {
    return {
      id: faker.random.uuid(),
      description: faker.lorem.sentence(),
      monStandard: faker.random.boolean(),
      volume: faker.lorem.word(),
      weight: faker.random.number(),
      name: faker.lorem.word(),
      shipper: faker.company.companyName(),
      carrier: faker.company.companyName(),
      status: this.fakeOrderStatus(),
      statusDate: new Date(),
      shipperAgent: faker.company.companyName(),
      loadingAddress: {
        city: faker.address.city(),
        houseNo: faker.random.number(),
        country: faker.address.country(),
        localNo: faker.random.number(),
        phone: faker.phone.phoneNumber(),
        street: faker.address.streetName(),
        zipCode: faker.address.zipCode()
      },
      loadingDates: {
        dateFrom: faker.date.past(),
        dateTo: faker.date.future(),
      }
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
  };

  constructor() {
  }
}
