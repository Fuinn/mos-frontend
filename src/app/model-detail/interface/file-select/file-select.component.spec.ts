import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceFileSelectComponent } from './file-select.component';

describe('InterfaceFileSelectComponent', () => {
  let component: InterfaceFileSelectComponent;
  let fixture: ComponentFixture<InterfaceFileSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceFileSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceFileSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
