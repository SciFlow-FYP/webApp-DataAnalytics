import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineCsvModalComponent } from './combine-csv-modal.component';

describe('CombineCsvModalComponent', () => {
  let component: CombineCsvModalComponent;
  let fixture: ComponentFixture<CombineCsvModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineCsvModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineCsvModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
