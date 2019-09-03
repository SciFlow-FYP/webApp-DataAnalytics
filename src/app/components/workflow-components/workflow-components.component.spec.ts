import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowComponentsComponent } from './workflow-components.component';

describe('WorkflowComponentsComponent', () => {
  let component: WorkflowComponentsComponent;
  let fixture: ComponentFixture<WorkflowComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
