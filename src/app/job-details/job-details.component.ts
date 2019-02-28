import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../api.service';
import {TransportOrder} from '../shared/modules/transportOrder';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  currentOrder: TransportOrder;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.searchService.getOrderById(id).subscribe(order => {
      this.currentOrder = order[0];
    });
  }
}
