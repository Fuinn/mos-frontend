import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperObjectDetailComponent } from './object-detail.component';

describe('HelperObjectDetailComponent', () => {
  let component: HelperObjectDetailComponent;
  let fixture: ComponentFixture<HelperObjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperObjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperObjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
