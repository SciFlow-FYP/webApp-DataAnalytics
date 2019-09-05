import { KmeanParaModalComponent } from './../kmean-para-modal/kmean-para-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { KnnParaModalComponent } from '../knn-para-modal/knn-para-modal.component';
import { LinearregParaModalComponent } from '../linearreg-para-modal/linearreg-para-modal.component';

@Component({
  selector: 'app-data-mining',
  templateUrl: './data-mining.component.html',
  styleUrls: ['./data-mining.component.scss']
})
export class DataMiningComponent implements OnInit {
  @ViewChild(KmeanParaModalComponent) modal: KmeanParaModalComponent;
  @ViewChild(KnnParaModalComponent) modalknn: KnnParaModalComponent;
  @ViewChild(LinearregParaModalComponent) modallinearreg: LinearregParaModalComponent;

  constructor() { }

  ngOnInit() {
  }

}
