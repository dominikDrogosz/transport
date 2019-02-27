import {Component, OnInit} from '@angular/core';
import * as faker from 'faker/locale/pl';

interface Worker {
  name: string;
  lastName: string;
  email: string;
  licenceNumber?: string;
}

@Component({
  selector: 'app-worker-information',
  templateUrl: './worker-information.component.html',
  styleUrls: ['./worker-information.component.scss']
})
export class WorkerInformationComponent implements OnInit {

  workerDataForm = {
    name: '',
    lastName: '',
    email: '',
    licenceNumber: '',
    isDriver: false
  };

  workersExamples: Array<Worker> = [
    {
      email: 'test@test.pl',
      lastName: faker.name.lastName(),
      name: faker.name.firstName()
    },
    {
      email: 'test@test.pl',
      lastName: faker.name.lastName(),
      name: faker.name.firstName(),
      licenceNumber: '1111'
    },
    {
      email: 'test@test.pl',
      lastName: faker.name.lastName(),
      name: faker.name.firstName(),
      licenceNumber: '2121'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
  }
}
