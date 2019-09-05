import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearregParaModalComponent } from './linearreg-para-modal.component';

describe('LinearregParaModalComponent', () => {
  let component: LinearregParaModalComponent;
  let fixture: ComponentFixture<LinearregParaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearregParaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearregParaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
