import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceObjectDetailComponent } from './object-detail.component';

describe('ObjectDetailComponent', () => {
  let component: InterfaceObjectDetailComponent;
  let fixture: ComponentFixture<InterfaceObjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceObjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceObjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
