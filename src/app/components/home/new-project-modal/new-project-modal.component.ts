import { Component, OnInit, TemplateRef, EventEmitter, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.component.html',
  styleUrls: ['./new-project-modal.component.scss']
})
export class NewProjectModalComponent implements OnInit {

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  public modalRef: BsModalRef; // {1}
  name: String;
  constructor(private modalService: BsModalService) {} // {2}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
    console.log(this.modalRef.content.name);
  }

  public closeModal() {
    this.modalRef.hide(); // {3}

  }

  public save() {
    this.modalRef.hide(); // {3}
    this.passEntry.emit(this.name);
    // this.router.navigate([`webApp/workflow`]);
  }


  ngOnInit() {
  }

}
