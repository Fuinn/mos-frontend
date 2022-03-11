import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperObjectListComponent } from './object-list.component';

describe('HelperObjectListComponent', () => {
  let component: HelperObjectListComponent;
  let fixture: ComponentFixture<HelperObjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperObjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
