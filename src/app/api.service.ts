import { StateService, State, _STATE_ERROR } from './state.service';
import { Http, Response } from '@angular/http';


const apiKey = '3af4g30saf4jqfjpa49i21fkjkbkaod';
const error = '0x00';

export class ApiService {
  constructor(private state: StateService, private http: Http) { }
  public addProject(projectName: string) {
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
      }, (e) => {
          console.log(e);
          const stateError: State = {
            current : _STATE_ERROR
          };
          this.state.error_details = e;
          this.state.state = stateError;
       });
  }
}
