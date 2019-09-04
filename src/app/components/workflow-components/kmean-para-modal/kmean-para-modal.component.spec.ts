import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmeanParaModalComponent } from './kmean-para-modal.component';

describe('KmeanParaModalComponent', () => {
  let component: KmeanParaModalComponent;
  let fixture: ComponentFixture<KmeanParaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmeanParaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmeanParaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
