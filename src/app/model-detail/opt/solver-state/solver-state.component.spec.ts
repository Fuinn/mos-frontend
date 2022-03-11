import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolverStateComponent } from './solver-state.component';

describe('SolverStateComponent', () => {
  let component: SolverStateComponent;
  let fixture: ComponentFixture<SolverStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolverStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolverStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
