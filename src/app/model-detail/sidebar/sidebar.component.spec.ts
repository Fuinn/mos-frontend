import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSidebarComponent } from './sidebar.component';

describe('ModelSidebarComponent', () => {
  let component: ModelSidebarComponent;
  let fixture: ComponentFixture<ModelSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
