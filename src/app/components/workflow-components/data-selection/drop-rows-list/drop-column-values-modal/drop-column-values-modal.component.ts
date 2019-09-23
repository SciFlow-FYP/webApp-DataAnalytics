import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-drop-column-values-modal',
  templateUrl: './drop-column-values-modal.component.html',
  styleUrls: ['./drop-column-values-modal.component.scss']
})
export class DropColumnValuesModalComponent implements OnInit {

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
