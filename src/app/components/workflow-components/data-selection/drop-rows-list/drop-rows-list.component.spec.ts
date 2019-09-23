import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropRowsListComponent } from './drop-rows-list.component';

describe('DropRowsListComponent', () => {
  let component: DropRowsListComponent;
  let fixture: ComponentFixture<DropRowsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropRowsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropRowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
