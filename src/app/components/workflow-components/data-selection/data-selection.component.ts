import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-selection',
  templateUrl: './data-selection.component.html',
  styleUrls: ['./data-selection.component.scss']
})
export class DataSelectionComponent implements OnInit {

  constructor() { }
  public isCollapsed1 = true;
  public isCollapsed = true;

  ngOnInit() {
  }

}
