import { Injectable } from '@angular/core';

export interface ProjectData {
  project_name?: string;
  projectFH?: File;
}
export interface State {
  current: number;
  data: ProjectData | null;
}

export const _XML_HEADER: string[] = new Array('<?xml pyUX />');
export const _STATE_INIT = 100;
export const _STATE_NEW = 200;
export const _STATE_LOAD = 300;

@Injectable()
export class StateService {
  currentState: State;
  displayTopBox: boolean = false;
  topBoxTxt: string = "";
  constructor() {
    this.currentState = {current : _STATE_INIT, data : null };
  }
  get state() {
    return this.currentState;
  }
  set state(newState: State) {
    this.currentState = newState;
  }
  get topBox() {
      return this.displayTopBox;
  }
  set topBox(disp : boolean) {
    this.displayTopBox = disp;
  }
  get topBoxText() {
    return this.topBoxTxt;
  }
  set topBoxText(txt: string) {
    this.topBoxTxt = txt;
  }
  createNewProject() {
    
    // const file: File = new File(_XML_HEADER, fileName);
  }
}
