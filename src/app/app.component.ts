import { StateService } from './state.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private state: StateService) {}
  createNew() {
    console.log('creating new');
  }
}
