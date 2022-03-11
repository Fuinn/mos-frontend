import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptConstraintTabComponent } from './constraint-tab.component';

describe('OptConstraintTabComponent', () => {
  let component: OptConstraintTabComponent;
  let fixture: ComponentFixture<OptConstraintTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptConstraintTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptConstraintTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
