import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelExecutionComponent } from './execution.component';

describe('ModelExecutionComponent', () => {
  let component: ModelExecutionComponent;
  let fixture: ComponentFixture<ModelExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
