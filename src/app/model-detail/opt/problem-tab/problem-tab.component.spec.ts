import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemTabComponent } from './problem-tab.component';

describe('ProblemTabComponent', () => {
  let component: ProblemTabComponent;
  let fixture: ComponentFixture<ProblemTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
