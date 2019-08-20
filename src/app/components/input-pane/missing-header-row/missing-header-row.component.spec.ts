import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingHeaderRowComponent } from './missing-header-row.component';

describe('MissingHeaderRowComponent', () => {
  let component: MissingHeaderRowComponent;
  let fixture: ComponentFixture<MissingHeaderRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingHeaderRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingHeaderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
