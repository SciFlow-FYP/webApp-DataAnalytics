import { CombineCsvModalComponent } from './../combineCsvs/combine-csv-modal/combine-csv-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NewProjectModalComponent } from './new-project-modal/new-project-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(NewProjectModalComponent) modal: NewProjectModalComponent;

  constructor() { }

  ngOnInit() {
  }

}
