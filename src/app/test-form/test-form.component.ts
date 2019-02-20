import { Component, OnInit } from '@angular/core';
import {SearchService} from '../api.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  testForm = {
    name: '',
    active: false
  };

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.searchService.searchByName(this.testForm.name, this.testForm.active).subscribe(
      x => console.log(x),
      e => console.log('onError: %s', e),
      () => console.log('onCompleted')
    );
  }
}
