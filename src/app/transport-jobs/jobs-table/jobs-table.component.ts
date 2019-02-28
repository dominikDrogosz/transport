import {Component, OnInit} from '@angular/core';
import * as faker from 'faker/locale/pl';
import {Job} from '../job';
import {SearchService} from '../../api.service';
import {TransportOrder} from '../../shared/modules/transportOrder';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss']
})
export class JobsTableComponent implements OnInit {
  orders: Array<TransportOrder>;
  displayedColumns: Array<keyof TransportOrder|string> = ['id', 'shipper', 'shipperAgent', 'carrier', 'status', 'statusDate', 'details'];

  constructor(private router: Router,
              private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.getAllOrders().subscribe(allOrders => this.orders = allOrders);
  }

  goToDetails(id: string) {
      this.router.navigateByUrl(`order-details/${id}`);
  }

}
