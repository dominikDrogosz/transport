import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUpdatingModifyComponent } from './vehicle-updating-modify.component';

describe('VehicleUpdatingModifyComponent', () => {
  let component: VehicleUpdatingModifyComponent;
  let fixture: ComponentFixture<VehicleUpdatingModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleUpdatingModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUpdatingModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
