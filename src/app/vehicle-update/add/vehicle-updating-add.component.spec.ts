import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUpdatingAddComponent } from './vehicle-updating-add.component';

describe('VehicleUpdatingAddComponent', () => {
  let component: VehicleUpdatingAddComponent;
  let fixture: ComponentFixture<VehicleUpdatingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleUpdatingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUpdatingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
