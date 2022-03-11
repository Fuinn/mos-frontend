import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionDetailComponent } from './function-detail.component';

describe('FunctionDetailComponent', () => {
  let component: FunctionDetailComponent;
  let fixture: ComponentFixture<FunctionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
