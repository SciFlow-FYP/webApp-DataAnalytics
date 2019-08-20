import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgePresentationComponent } from './knowledge-presentation.component';

describe('KnowledgePresentationComponent', () => {
  let component: KnowledgePresentationComponent;
  let fixture: ComponentFixture<KnowledgePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
