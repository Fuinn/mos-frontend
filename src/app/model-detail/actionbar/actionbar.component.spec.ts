import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelActionbarComponent } from './actionbar.component';

describe('ModelActionbarComponent', () => {
  let component: ModelActionbarComponent;
  let fixture: ComponentFixture<ModelActionbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelActionbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelActionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
