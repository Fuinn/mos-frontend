import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstraintStateComponent } from './constraint-state.component';

describe('ConstraintStateComponent', () => {
  let component: ConstraintStateComponent;
  let fixture: ComponentFixture<ConstraintStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstraintStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstraintStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
