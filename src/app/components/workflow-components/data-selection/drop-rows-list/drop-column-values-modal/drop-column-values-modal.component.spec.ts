import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropColumnValuesModalComponent } from './drop-column-values-modal.component';

describe('DropColumnValuesModalComponent', () => {
  let component: DropColumnValuesModalComponent;
  let fixture: ComponentFixture<DropColumnValuesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropColumnValuesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropColumnValuesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
