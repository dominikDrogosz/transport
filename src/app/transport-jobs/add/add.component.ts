import { Component, OnInit } from '@angular/core';
import {OrderStatus, TransportOrder} from '../../shared/modules/transportOrder';

@Component({
  selector: 'app-transport-jobs-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class TransportJobsAddComponent implements OnInit {

  statusesList: Array<OrderStatus> = ['NEW', 'DONE', 'IN PROGRESS'];
  jobDataForm: TransportOrder = {
    shipperAgent: '',
    statusDate: new Date(),
    status: 'NEW',
    carrier: '',
    shipper: '',
    weight: 0,
    volume: '',
    monStandard: false,
    description: '',
    name: '',
    loadingDates: {
      dateFrom: new Date(),
      dateTo: new Date()
    },
    loadingAddress: {
      zipCode: '',
      street: '',
      phone: '',
      localNo: 0,
      country: '',
      houseNo: 0,
      city: ''
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
