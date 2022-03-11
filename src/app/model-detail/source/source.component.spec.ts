import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSourceComponent } from './source.component';

describe('ModelSourceComponent', () => {
  let component: ModelSourceComponent;
  let fixture: ComponentFixture<ModelSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
