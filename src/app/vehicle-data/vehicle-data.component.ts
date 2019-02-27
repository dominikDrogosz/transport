import {Component} from '@angular/core';
import {SearchService} from '../api.service';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.scss']
})
export class VehicleDataComponent {

  vehicleDataForm = {
    name: '',
    categories: [{
      value: false,
      name: 'Changes history',
      formName: 'changesHistory'
    },
      {
        value: false,
        name: 'Fleet',
        formName: 'relationType'
      },
      {
        value: false,
        name: 'Vehicle parameters',
        formName: 'VehicleParams'
      }, {
        value: false,
        name: 'Connected devices',
        formName: 'connectedDevices'
      }]
  };

  constructor(private searchService: SearchService) {
  }

  onSubmit() {
    // this.searchService.searchByName(this.vehicleDataForm.name, this.vehicleDataForm.active).subscribe(
    //   response => {
    //     this.elementsToShow = [...this.elementsToShow, ...response];
    //   }
    // );
  }
}
