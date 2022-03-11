import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionTabComponent } from './function-tab.component';

describe('FunctionTabComponent', () => {
  let component: FunctionTabComponent;
  let fixture: ComponentFixture<FunctionTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
