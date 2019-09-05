import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-kmean-para-modal',
  templateUrl: './kmean-para-modal.component.html',
  styleUrls: ['./kmean-para-modal.component.scss']
})
export class KmeanParaModalComponent implements OnInit {

  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) {} // {2}

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
