import { Component, OnInit } from '@angular/core';
import {Job} from '../transport-jobs/job';
import * as faker from 'faker/locale/pl';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'param1', 'param2'];
  exampleDevices = [
    {
      id: 1,
      param1: faker.lorem.sentence(),
      param2: faker.lorem.sentence()
    }, {
      id: 2,
      param1: faker.lorem.sentence(),
      param2: faker.lorem.sentence()
    },{
      id: 3,
      param1: faker.lorem.sentence(),
      param2: faker.lorem.sentence()
    },{
      id: 4,
      param1: faker.lorem.sentence(),
      param2: faker.lorem.sentence()
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
