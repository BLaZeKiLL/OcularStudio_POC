import { Component, OnInit } from '@angular/core';
import { GraphEditor } from '@ocular/js-graph';


@Component({
  selector: 'ocular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private graphEditor: GraphEditor;

  ngOnInit() {
    this.graphEditor = new GraphEditor('editor');
  }

}
