import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceFileDetailComponent } from './file-detail.component';

describe('InterfaceFileDetailComponent', () => {
  let component: InterfaceFileDetailComponent;
  let fixture: ComponentFixture<InterfaceFileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceFileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceFileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
