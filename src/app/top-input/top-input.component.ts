import { _STATE_INIT, _STATE_NEW } from './../state.service';
import { StateService } from '../state.service';
import { Component, OnInit, Input} from '@angular/core';
const _enter = 13;
const _exit = 27;
@Component({
  selector: 'app-top-input',
  templateUrl: './top-input.component.html',
  styleUrls: ['./top-input.component.css']
})

export class TopInputComponent implements OnInit {
  @Input() display: boolean;
  @Input() title: string;
  constructor(private state: StateService) {}
  handleKeyDown(event) {
    if (event.keyCode === _enter) {
        const data = {
          project_name : event.target.value
        };
        event.target.value = '';
        this.state.topBox = false;
        this.state.state = {
          current : _STATE_NEW,
          data : data
        };
    }
    if (event.keyCode === _exit) {
      this.state.topBox = false;
      event.target.value = '';
      this.state.state = {
        current : _STATE_INIT,
        data : null
      };
    }
  }
  ngOnInit() {  }
}
