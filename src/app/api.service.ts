import { StateService, State, _STATE_ERROR, _STATE_CREATOR } from './state.service';
import { Http, Response } from '@angular/http';


const apiKey = '3af4g30saf4jqfjpa49i21fkjkbkaod';
const error = '0x00';

export class ApiService {
  constructor(private state: StateService, private http: Http) { }
  public addProject(projectName: string) {
    this.apiQuery('new?project_name=' + projectName)
        .then( () => this.state.setProjectName(projectName))
        .catch( () => console.log('error caught'));
  }
  private apiQuery(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:9393/api/'
      + query
      + '&key='
      + apiKey).subscribe(
        (res: Response) => {
          if (res.toString() === error) {
            const stateError: State = {
              current : _STATE_ERROR
            };
            this.state.state = stateError;
          } else {
              const stateCreator: State = {
                  current : _STATE_CREATOR,
                  data : {
                    project_data : {
                      api_body : res
                    },
                  }
              };
              console.log(stateCreator);
              this.state.state = stateCreator;
              resolve();
          }
        }, (e) => {
            console.log(e);
            const stateError: State = {
              current : _STATE_ERROR
            };
            this.state.error_details = e;
            this.state.state = stateError;
            reject();
        });
    });
}
