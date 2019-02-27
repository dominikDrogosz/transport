import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {

  devices = ['typ1', 'typ2', 'typ3'];
  vehicleDataForm = {
    number: '',
    wheelsNumber: 4,
    type: '',
    devices: []
  };

  constructor() { }

  ngOnInit() {
  }

}
