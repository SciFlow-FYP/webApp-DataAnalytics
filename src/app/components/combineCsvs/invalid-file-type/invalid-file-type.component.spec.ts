import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidFileTypeComponent } from './invalid-file-type.component';

describe('InvalidFileTypeComponent', () => {
  let component: InvalidFileTypeComponent;
  let fixture: ComponentFixture<InvalidFileTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidFileTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidFileTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
