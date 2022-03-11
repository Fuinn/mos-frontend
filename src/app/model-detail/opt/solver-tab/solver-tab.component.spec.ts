import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolverTabComponent } from './solver-tab.component';

describe('SolverTabComponent', () => {
  let component: SolverTabComponent;
  let fixture: ComponentFixture<SolverTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolverTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolverTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
