import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableStateComponent } from './variable-state.component';

describe('VariableStateComponent', () => {
  let component: VariableStateComponent;
  let fixture: ComponentFixture<VariableStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
