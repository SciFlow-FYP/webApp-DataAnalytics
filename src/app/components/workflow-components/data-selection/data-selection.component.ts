import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-data-selection',
  templateUrl: './data-selection.component.html',
  styleUrls: ['./data-selection.component.scss']
})
export class DataSelectionComponent implements OnInit {

  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) { }
  public isCollapsed1 = true;
  public isCollapsed = true;

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  public closeModal() {
    this.modalRef.hide(); // {3}

  }

  public save() {
    this.modalRef.hide(); // {3}
    // this.passEntry.emit(this.name);
    // this.router.navigate([`webApp/workflow`]);
  }

  ngOnInit() {
  }

}
