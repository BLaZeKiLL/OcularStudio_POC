import { Injectable } from '@angular/core';

import { ipcRenderer, webFrame, remote } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {

  public ipcRenderer: typeof ipcRenderer;
  public webFrame: typeof webFrame;
  public remote: typeof remote;

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('electron').remote;
    }
  }

  get isElectron() {
    return window && window.process && window.process.type;
  }

}
