import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstraintDetailComponent } from './constraint-detail.component';

describe('OptConstraintDetailComponent', () => {
  let component: ConstraintDetailComponent;
  let fixture: ComponentFixture<ConstraintDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstraintDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstraintDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
