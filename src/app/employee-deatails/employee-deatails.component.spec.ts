import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeatailsComponent } from './employee-deatails.component';

describe('EmployeeDeatailsComponent', () => {
  let component: EmployeeDeatailsComponent;
  let fixture: ComponentFixture<EmployeeDeatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDeatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
