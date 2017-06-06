import { StateService, State } from './../state.service';
import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  state: State;
  constructor(private currentState: StateService) {
    this.state = currentState.currentState;
  }
  ngOnInit() {
  }
}
