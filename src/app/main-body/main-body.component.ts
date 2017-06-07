import { CreatorComponent } from './../creator/creator.component';
import { StateService, State, _STATE_ERROR, _STATE_INIT, _STATE_LOAD, _STATE_NEW, _STATE_CREATOR } from './../state.service';
import { Component, OnInit, Input, Injectable } from '@angular/core';
import { PyUXLoadingComponent } from '../py-ux-loading/py-ux-loading.component';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})

export class MainBodyComponent implements OnInit {
  state: State;
  current: number;
  state_error: number;
  state_init: number;
  state_load: number;
  state_new: number;
  state_creator: number;
  error_detials: string = '';
  constructor(private currentState: StateService) {
    this.state_error = _STATE_ERROR;
    this.state_init = _STATE_INIT;
    this.state_load = _STATE_LOAD;
    this.state_new = _STATE_NEW;
    this.state_creator = _STATE_CREATOR;
    this.state = this.currentState.currentState;
    this.current = this.state.current;
    currentState.stateChange.subscribe((data) => {
      this.state = this.currentState.currentState;
      this.current = this.state.current;
      if (this.current === _STATE_ERROR) {
        this.error_detials = currentState.error_details.statusText;
      }
    });
  }
  ngOnInit() {}
}
