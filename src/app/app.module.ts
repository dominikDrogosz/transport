import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatSlideToggleModule, MatTableModule,
  MatFormFieldModule, MatInputModule, MatListModule, MatCardModule,
  MatRippleModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
  MatSelectModule,
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VehicleDataComponent} from './vehicle-data/vehicle-data.component';
import {PageViewComponent} from './page-view/page-view.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {InMemoryApiService} from './inMemoryApi.service';
import {SearchService} from './api.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WorkerInformationComponent} from './worker-information/worker-information.component';
import {TransportJobsAcceptedComponent} from './transport-jobs/accepted/accepted.component';
import {TransportJobsExternalComponent} from './transport-jobs/external/transport-jobs-external.component';
import {TransportJobsAddComponent} from './transport-jobs/add/add.component';
import {JobsTableComponent} from './transport-jobs/jobs-table/jobs-table.component';
import { VehicleUpdatingModifyComponent } from './vehicle-update/modify/vehicle-updating-modify.component';
import { VehicleUpdatingAddComponent } from './vehicle-update/add/vehicle-updating-add.component';
import { VehicleFormComponent } from './vehicle-update/vehicle-form/vehicle-form.component';
import { DevicesComponent } from './devices/devices.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { SingleWorkerDataComponent } from './single-worker-data/single-worker-data.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatSlideToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatTableModule,
  MatSelectModule
];

const webApi = environment.production ?
  [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService, {delay: 200});

@NgModule({
  declarations: [
    AppComponent,
    VehicleDataComponent,
    PageViewComponent,
    FooterComponent,
    DashboardComponent,
    WorkerInformationComponent,
    TransportJobsAcceptedComponent,
    TransportJobsExternalComponent,
    TransportJobsAddComponent,
    JobsTableComponent,
    VehicleUpdatingModifyComponent,
    VehicleUpdatingAddComponent,
    VehicleFormComponent,
    DevicesComponent,
    VehiclesListComponent,
    SingleWorkerDataComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    webApi,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
  providers: [SearchService, HttpClientInMemoryWebApiModule],
  bootstrap: [AppComponent,
    PageViewComponent, FooterComponent]
})
export class AppModule {
}
