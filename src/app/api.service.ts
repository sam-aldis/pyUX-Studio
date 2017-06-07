import { StateService, State, _STATE_ERROR } from './state.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

const apiKey = '3af4g30saf4jqfjpa49i21fkjkbkaod';
const error = '0x00';

@Injectable()
export class ApiService {
  constructor(private http: Http, private state: StateService) { }
  addProject(projectName: string) {
    const req = this.http.get('http://localhost:9393/api/new?project_name='
    + projectName
    + '&key='
    + apiKey).subscribe(
      (res: Response) => {
        if (res.toString() === error) {
          const stateError: State = {
            current : _STATE_ERROR
          };
          this.state.state = stateError;
        }
      });
  }
}
