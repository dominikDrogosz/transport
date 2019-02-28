import {Component, OnInit} from '@angular/core';
import {SearchService} from '../api.service';
import {WorkerForm} from '../shared/modules/wokerForm';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-worker-information',
  templateUrl: './worker-information.component.html',
  styleUrls: ['./worker-information.component.scss']
})
export class WorkerInformationComponent implements OnInit {

  workers = [];
  displayedColumns = ['name', 'lastName', 'email', 'button'];
  workerDataForm: WorkerForm = {
    name: '',
    lastName: '',
    email: '',
    licenceNumber: '',
    documents: ['Driver license']
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private searchService: SearchService
              ) {
  }

  ngOnInit() {
    this.searchService.getAllWorkers().subscribe(workers => {
      this.workers = [...this.workers, ...workers];
    });
  }

  onSubmit() {
    this.searchService.getWorkers(this.workerDataForm).subscribe(workers => {
      this.workers = workers;
    });
  }

  goToWorkerView(id: string) {
    this.router.navigateByUrl(`employee-details/${id}`);
  }
}
