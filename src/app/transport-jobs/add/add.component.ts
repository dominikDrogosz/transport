import { Component, OnInit } from '@angular/core';
import {Job} from '../job';

@Component({
  selector: 'app-transport-jobs-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class TransportJobsAddComponent implements OnInit {

  jobDataForm = {
    employee: '',
    employer: '',
    description: '',
    date: new Date(),
    isExternal: false
  };

  constructor() { }

  ngOnInit() {
  }

}
