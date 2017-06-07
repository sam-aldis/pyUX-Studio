import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyUXLoadingComponent } from './py-ux-loading.component';

describe('PyUXLoadingComponent', () => {
  let component: PyUXLoadingComponent;
  let fixture: ComponentFixture<PyUXLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyUXLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyUXLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
