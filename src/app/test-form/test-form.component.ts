import {Component} from '@angular/core';
import {SearchService} from '../api.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {

  testForm = {
    name: '',
    active: false
  };

  elementsToShow = [];

  constructor(private searchService: SearchService) {
  }

  onSubmit() {
    this.searchService.searchByName(this.testForm.name, this.testForm.active).subscribe(
      response => {
        this.elementsToShow = [...this.elementsToShow, ...response];
      }
    );
  }
}
