import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWorkerDataComponent } from './single-worker-data.component';

describe('SingleWorkerDataComponent', () => {
  let component: SingleWorkerDataComponent;
  let fixture: ComponentFixture<SingleWorkerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWorkerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWorkerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
