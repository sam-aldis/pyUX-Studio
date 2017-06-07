import { _STATE_CREATOR, StateService, State, } from './../state.service';
import {
  Component,
  OnInit,
  Injectable,
  Input
} from '@angular/core';

@Component({
  selector: 'py-ux-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
  code: string;
  constructor(private currentState: StateService) {
    currentState.state.data.project_data.uxml = currentState.state.data.project_data.api_body._body;
    this.code = currentState.state.data.project_data.uxml;
  }

  ngOnInit() {
  }

}
