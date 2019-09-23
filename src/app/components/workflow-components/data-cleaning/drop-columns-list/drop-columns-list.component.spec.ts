import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropColumnsListComponent } from './drop-columns-list.component';

describe('DropColumnsListComponent', () => {
  let component: DropColumnsListComponent;
  let fixture: ComponentFixture<DropColumnsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropColumnsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropColumnsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
