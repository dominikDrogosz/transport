import {Component, OnInit} from '@angular/core';
import * as faker from 'faker/locale/pl';
import {Job} from '../job';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss']
})
export class JobsTableComponent implements OnInit {

  displayedColumns: Array<keyof Job> = ['id', 'date', 'description', 'employee', 'employer'];
  exampleJobs: Array<Job> = [
    {
      id: 1,
      date: new Date(),
      description: faker.lorem.sentence(),
      employer: 'XYZ',
      employee: 'ZYX'
    }, {
      id: 2,
      date: new Date(),
      description: faker.lorem.sentence(),
      employer: 'AAA',
      employee: 'VVV'
    }, {
      id: 3,
      date: new Date(),
      description: faker.lorem.sentence(),
      employer: 'BBB',
      employee: 'CCC'
    }, {
      id: 4,
      date: new Date(),
      description: faker.lorem.sentence(),
      employer: 'QQQ',
      employee: 'WWW'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
