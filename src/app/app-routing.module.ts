import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestFormComponent} from './test-form/test-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export interface RouteDefinition {
  path: string;
  name: string;
  permission?: string;
}

export const routesInNavbar: Array<RouteDefinition> = [
  {path: 'test-form', name: 'Test Form'},
  {path: '', name: 'Dashboard'}
];

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'test-form', component: TestFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
