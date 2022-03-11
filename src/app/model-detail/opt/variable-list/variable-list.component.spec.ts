import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableListComponent } from './variable-list.component';

describe('VariableListComponent', () => {
  let component: VariableListComponent;
  let fixture: ComponentFixture<VariableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
