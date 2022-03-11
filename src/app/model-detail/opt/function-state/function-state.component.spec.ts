import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionStateComponent } from './function-state.component';

describe('FunctionStateComponent', () => {
  let component: FunctionStateComponent;
  let fixture: ComponentFixture<FunctionStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
