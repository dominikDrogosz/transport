import {Component, OnInit} from '@angular/core';
import {SearchService} from '../api.service';
import {InMemoryApiService} from '../inMemoryApi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  elementsToShow = [];

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.getAll().subscribe((element) => {
      this.elementsToShow = [...this.elementsToShow, ...element];
    });
  }

}
