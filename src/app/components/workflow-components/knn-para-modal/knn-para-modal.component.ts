import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-knn-para-modal',
  templateUrl: './knn-para-modal.component.html',
  styleUrls: ['./knn-para-modal.component.scss']
})
export class KnnParaModalComponent implements OnInit {

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
