import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-output-pane',
  templateUrl: './output-pane.component.html',
  styleUrls: ['./output-pane.component.scss']
})
export class OutputPaneComponent implements OnInit {
  //public text = `{ "text": "This is text file!中文" }`;
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  constructor(
    // private _httpClient: HttpClient,
    // private _FileSaverService: FileSaverService
    ) { }
  // fileName = `save.json`;
  //  blob = new Blob([JSON.stringify(this.object)], {type : 'application/json'});
  //  FileSaver(blob: any , fileName: any);

  ngOnInit() {
  }

  onDown(type: Object) {
     const fileName = `test.json`;
     const blob = new Blob([JSON.stringify(this.object)], {type : 'application/json'});
     saveAs(blob, fileName);
  }
}
