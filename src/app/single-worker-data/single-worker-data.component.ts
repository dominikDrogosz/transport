import { Component, OnInit } from '@angular/core';
import {WorkerObject} from '../shared/modules/workerObject';
import {SearchService} from '../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-worker-data',
  templateUrl: './single-worker-data.component.html',
  styleUrls: ['./single-worker-data.component.scss']
})
export class SingleWorkerDataComponent implements OnInit {

  currentWorker: WorkerObject;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.searchService.getWorkerById(id).subscribe(worker => {
      this.currentWorker = worker[0];
    });
  }

}
