import { StateService, State, _STATE_ERROR, _STATE_INIT, _STATE_LOAD, _STATE_NEW} from './../state.service';
import { Component, OnInit, Input, Injectable, Renderer2 } from '@angular/core';

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
  constructor(private currentState: StateService, private renderer: Renderer2) {
    this.state_error = _STATE_ERROR;
    this.state_init = _STATE_INIT;
    this.state_load = _STATE_LOAD;
    this.state_new = _STATE_NEW;
    this.state = this.currentState.currentState;
    this.current = this.state.current;
    renderer.createComment('test');
  }
  ngOnInit() {}
}
