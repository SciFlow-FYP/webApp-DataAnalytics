import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMiningComponent } from './data-mining.component';

describe('DataMiningComponent', () => {
  let component: DataMiningComponent;
  let fixture: ComponentFixture<DataMiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
