import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatSlideToggleModule,
  MatFormFieldModule, MatInputModule, MatListModule,
  MatRippleModule, MatToolbarModule, MatSidenavModule,
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestFormComponent} from './test-form/test-form.component';
import {PageViewComponent} from './page-view/page-view.component';
import {FooterComponent} from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import {environment} from '../environments/environment';
import {InMemoryApiService} from './inMemoryApi.service';
import {SearchService} from './api.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatSlideToggleModule
];

const webApi = environment.production ?
  [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService, { delay: 200 });

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    PageViewComponent,
    FooterComponent,
    DashboardComponent
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
