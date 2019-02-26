import {Component, ChangeDetectorRef, OnDestroy, ViewChild} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import {AbstractRouteDefinition, RouteDefinition, routesInNavbar} from '../app-routing.module';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnDestroy {
  @ViewChild('snav') snav: MatSidenav;
  private mobileQuery: MediaQueryList;
  private fillerNav = routesInNavbar;
  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  toggleSnav() {
    this.snav.toggle();
  }

  changeChildrenVisiblity(nav: AbstractRouteDefinition): void {
    nav.showChildren = !nav.showChildren;
  }
}
