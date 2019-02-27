import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportJobsAddComponent } from './add.component';

describe('TransportJobsAddComponent', () => {
  let component: TransportJobsAddComponent;
  let fixture: ComponentFixture<TransportJobsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportJobsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportJobsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
