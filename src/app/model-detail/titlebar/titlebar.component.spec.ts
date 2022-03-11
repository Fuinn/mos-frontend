import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelTitlebarComponent } from './titlebar.component';

describe('ModelTitlebarComponent', () => {
  let component: ModelTitlebarComponent;
  let fixture: ComponentFixture<ModelTitlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelTitlebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
