import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemStateComponent } from './problem-state.component';

describe('ProblemStateComponent', () => {
  let component: ProblemStateComponent;
  let fixture: ComponentFixture<ProblemStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
