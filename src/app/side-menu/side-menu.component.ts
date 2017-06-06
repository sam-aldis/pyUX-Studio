import { State, StateService, _STATE_NEW, _STATE_LOAD } from './../state.service';
import { Component, OnInit, Injectable } from '@angular/core';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  constructor(private currentState: StateService) { }
  createNew() {
    let cState: State = {
     current : _STATE_NEW,
     data : null
    };
    this.currentState.state = cState;
    this.currentState.topBox = true;
    this.currentState.topBoxText = 'Please Name Your Project';
    // TODO: Next state will eventually need to be a choose save destination box
  }
  openProject() {
    const oState: State = {
      current : _STATE_LOAD,
      data : null
    };
    this.currentState.state = oState;
    this.currentState.topBox = true;
    // TODO: This will eventually need to be replaced with a proper open dialogue
    this.currentState.topBoxText = 'Please enter the project name to open';
  }
  ngOnInit() {
  }

}
