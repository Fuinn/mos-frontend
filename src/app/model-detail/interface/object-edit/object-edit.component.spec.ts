import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceObjectEditComponent } from './object-edit.component';

describe('ObjectEditComponent', () => {
  let component: InterfaceObjectEditComponent;
  let fixture: ComponentFixture<InterfaceObjectEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceObjectEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceObjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
