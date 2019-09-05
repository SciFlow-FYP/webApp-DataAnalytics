import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combine-csv-modal',
  templateUrl: './combine-csv-modal.component.html',
  styleUrls: ['./combine-csv-modal.component.scss']
})
export class CombineCsvModalComponent implements OnInit {

  public modalRef: BsModalRef; // {1}
  public files: NgxFileDropEntry[] = [];
  constructor(private modalService: BsModalService, private router: Router) {} // {2}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  public closeModal() {
    this.modalRef.hide(); // {3}

  }

  public saveModal() {
    this.modalRef.hide(); // {3}
    this.router.navigate([`webApp/workflow`]);
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
