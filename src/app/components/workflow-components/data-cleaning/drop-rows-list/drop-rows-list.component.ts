import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DropColumnValuesModalComponent } from './drop-column-values-modal/drop-column-values-modal.component';

@Component({
  selector: 'app-drop-rows-list',
  templateUrl: './drop-rows-list.component.html',
  styleUrls: ['./drop-rows-list.component.scss']
})
export class DropRowsListComponent implements OnInit {
  @ViewChild(DropColumnValuesModalComponent) modal: DropColumnValuesModalComponent;

  constructor() { }

  ngOnInit() {
  }

}
