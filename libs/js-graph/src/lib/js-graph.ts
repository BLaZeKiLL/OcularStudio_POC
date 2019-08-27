import { Editor, LGraph, LGraphCanvas } from 'litegraph.js';

export class GraphEditor {

  private editor: Editor;
  private graph: LGraph;
  private canvas: LGraphCanvas;

  constructor(id: string, options?: { miniwindow: boolean }) {
    this.editor = new Editor(id, options);
    this.graph = this.editor.graph;
    this.canvas = this.editor.graphcanvas;

    const editor = this.editor;

    // enable auto resize
    window.addEventListener("resize", function() { editor.graphcanvas.resize(); } );
  }

  public get Editor(): Editor {
    return this.editor;
  }

  public get Graph(): LGraph {
    return this.graph;
  }

  public get Canvas(): LGraphCanvas {
    return this.canvas;
  }

}
