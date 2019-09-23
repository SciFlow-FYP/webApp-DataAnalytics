import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRowsComponent } from './select-rows.component';

describe('SelectRowsComponent', () => {
  let component: SelectRowsComponent;
  let fixture: ComponentFixture<SelectRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
