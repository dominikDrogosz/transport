import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportJobsExternalComponent } from './transport-jobs-external.component';

describe('TransportJobsExternalComponent', () => {
  let component: TransportJobsExternalComponent;
  let fixture: ComponentFixture<TransportJobsExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportJobsExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportJobsExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
