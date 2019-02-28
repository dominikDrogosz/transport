import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WorkerInformationComponent} from './worker-information/worker-information.component';
import {TransportJobsAcceptedComponent} from './transport-jobs/accepted/accepted.component';
import {TransportJobsExternalComponent} from './transport-jobs/external/transport-jobs-external.component';
import {TransportJobsAddComponent} from './transport-jobs/add/add.component';
import {VehicleUpdatingModifyComponent} from './vehicle-update/modify/vehicle-updating-modify.component';
import {VehicleUpdatingAddComponent} from './vehicle-update/add/vehicle-updating-add.component';
import {DevicesComponent} from './devices/devices.component';
import {VehiclesListComponent} from './vehicles-list/vehicles-list.component';
import {SingleWorkerDataComponent} from './single-worker-data/single-worker-data.component';
import {JobDetailsComponent} from './job-details/job-details.component';

export type RouteDefinition = TypicalRouteDefinition|AbstractRouteDefinition & {
  name: string;
};

export interface TypicalRouteDefinition {
  path: string;
}

export interface AbstractRouteDefinition {
  children: Array<RouteDefinition>;
  showChildren: boolean;
}

export const routesInNavbar: Array<RouteDefinition> = [
  {path: '', name: 'Dashboard'},
  {path: 'vehicle-data', name: 'Vehicle data'},
  {path: 'employees-list', name: 'Employees List'},
  {
    name: 'Transport orders', showChildren: false,
    children: [
      {path: 'transport-jobs/accepted', name: 'Accepted'},
      {path: 'transport-jobs/external', name: 'External'},
      {path: 'transport-jobs/add', name: 'Add'},
    ]
  },
  {
    name: 'Update of vehicle', showChildren: false,
    children: [
      {path: 'vehicle-update/modify', name: 'Modify'},
      {path: 'vehicle-update/add', name: 'Add'},
    ]
  },
  {path: 'devices', name: 'Devices'},
];

const transportRoutes: Routes = [
  {path: 'accepted', component: TransportJobsAcceptedComponent},
  {path: 'external', component: TransportJobsExternalComponent},
  {path: 'add', component: TransportJobsAddComponent}
];
const vehicleRoutes: Routes = [
  {path: 'modify', component: VehicleUpdatingModifyComponent},
  {path: 'add', component: VehicleUpdatingAddComponent},
];

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'vehicle-data', component: VehiclesListComponent},
  {path: 'employees-list', component: WorkerInformationComponent},
  {path: 'employee-details/:id', component: SingleWorkerDataComponent},
  {path: 'order-details/:id', component: JobDetailsComponent},
  {path: 'devices', component: DevicesComponent},
  {path: 'transport-jobs', children: transportRoutes},
  {path: 'vehicle-update', children: vehicleRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
