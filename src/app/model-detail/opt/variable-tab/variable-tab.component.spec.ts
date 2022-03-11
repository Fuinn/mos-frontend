import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableTabComponent } from './variable-tab.component';

describe('VariableTabComponent', () => {
  let component: VariableTabComponent;
  let fixture: ComponentFixture<VariableTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
