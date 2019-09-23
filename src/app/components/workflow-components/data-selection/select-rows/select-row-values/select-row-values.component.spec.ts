import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRowValuesComponent } from './select-row-values.component';

describe('SelectRowValuesComponent', () => {
  let component: SelectRowValuesComponent;
  let fixture: ComponentFixture<SelectRowValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRowValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRowValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
