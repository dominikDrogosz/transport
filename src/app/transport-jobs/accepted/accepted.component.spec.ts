import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportJobsAcceptedComponent } from './accepted.component';

describe('TransportJobsAcceptedComponent', () => {
  let component: TransportJobsAcceptedComponent;
  let fixture: ComponentFixture<TransportJobsAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportJobsAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportJobsAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
