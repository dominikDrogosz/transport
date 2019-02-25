import {Component, OnInit} from '@angular/core';
import {SearchService} from '../api.service';
import {InMemoryApiService} from '../inMemoryApi.service';

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

  constructor(private searchService: SearchService,
              private inMemoryApiService: InMemoryApiService) {
  }

  onSubmit() {
    this.searchService.searchByName(this.testForm.name, this.testForm.active).subscribe(
      response => {
        this.elementsToShow = [...this.elementsToShow, ...response];
      }
    );
  }

  addRandom() {
    const element = this.inMemoryApiService.oneElement();
    this.searchService.addNewElement(element).subscribe(() => {
      this.searchService.getAll().subscribe(response => console.log(response));
    });
  }
}
