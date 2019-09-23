import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-transformation',
  templateUrl: './data-transformation.component.html',
  styleUrls: ['./data-transformation.component.scss']
})
export class DataTransformationComponent implements OnInit {

  public currentPage = 2;
  public changePage(index: number): void {
      this.currentPage += index;
  }

  constructor() { }

  ngOnInit() {
  }

}
