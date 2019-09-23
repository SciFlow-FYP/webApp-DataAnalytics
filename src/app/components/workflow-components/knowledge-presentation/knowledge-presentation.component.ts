import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-presentation',
  templateUrl: './knowledge-presentation.component.html',
  styleUrls: ['./knowledge-presentation.component.scss']
})
export class KnowledgePresentationComponent implements OnInit {


  public currentPage = 4;
  public changePage(index: number): void {
      this.currentPage += index;
  }

  constructor() { }

  ngOnInit() {
  }

}
