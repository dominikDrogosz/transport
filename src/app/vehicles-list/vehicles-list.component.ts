import {Component, OnInit} from '@angular/core';
import * as faker from 'faker/locale/pl';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {

  displayedColumns: Array<string> = ['id', 'state', 'mark', 'fleetType', 'leasingDateFrom', 'leasingDateTo'];
  exampleVehicles = [
    {
      id: 1,
      state: faker.lorem.sentence(),
      mark: faker.lorem.sentence(),
      fleetType: 'leased',
      leasingDateFrom: new Date(),
      leasingDateTo: new Date()
    }, {
      id: 2,
      state: faker.lorem.sentence(),
      mark: faker.lorem.sentence(),
      fleetType: 'owned',
    }, {
      id: 3,
      state: faker.lorem.sentence(),
      mark: faker.lorem.sentence(),
      fleetType: 'leased',
      leasingDateFrom: new Date(),
      leasingDateTo: new Date()
    }, {
      id: 4,
      state: faker.lorem.sentence(),
      mark: faker.lorem.sentence(),
      fleetType: 'owned',
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
