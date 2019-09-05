import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnnParaModalComponent } from './knn-para-modal.component';

describe('KnnParaModalComponent', () => {
  let component: KnnParaModalComponent;
  let fixture: ComponentFixture<KnnParaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnnParaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnnParaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
