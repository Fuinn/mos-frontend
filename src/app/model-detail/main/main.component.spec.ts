import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMainComponent } from './main.component';

describe('ModelMainComponent', () => {
  let component: ModelMainComponent;
  let fixture: ComponentFixture<ModelMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
