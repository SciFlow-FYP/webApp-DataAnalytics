import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-cleaning',
  templateUrl: './data-cleaning.component.html',
  styleUrls: ['./data-cleaning.component.scss']
})
export class DataCleaningComponent implements OnInit {

  HandleMissingValues: boolean;
  DropDuplicateRows: boolean;

  public isCollapsed2 = true;
  public isCollapsed1 = true;
  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
