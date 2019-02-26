import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestFormComponent} from './test-form/test-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export type RouteDefinition = TypicalRouteDefinition|AbstractRouteDefinition& {
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
  {path: 'vehicle-data', name: 'Dane Pojazdu'},
  {path: 'worker-data', name: 'Informacje o pracowniku'},
  {
    name: 'Zlecenia transportowe', showChildren: false,
    children: [
      {path: 'transport-jobs/accepted', name: 'Przyjęte'},
      {path: 'transport-jobs/external', name: 'Zewnętrzne'},
      {path: 'transport-jobs/add', name: 'Nowe'},
    ]
  },
  {
    name: 'Aktualizacja Pojazdu', showChildren: false,
    children: [
      {path: 'vehicle-update/modify', name: 'Modyfikacja'},
      {path: 'vehicle-update/add', name: 'Nowy'},
    ]
  },
  {path: 'devices', name: 'Urządzenia'},
];

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'vehicle-data', component: TestFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
