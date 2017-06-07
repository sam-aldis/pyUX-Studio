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
  public loadProject(projectName: string) {
    this.apiQuery('open?project_name=' + projectName)
        .then(() => this.state.setProjectName(projectName))
        .catch(() => console.log('error caught'));
  }
  public saveProject() {
    if (this.state.state.data.project_name === '') {
      this.state.state.current = _STATE_ERROR;
      return;
    } else {
      const projectName = this.state.state.data.project_name;
      const projectData = this.state.state.data.project_data.uxml;
      this.apiQuery('save', true, {
                            project_name : projectName,
                            project_data : projectData })
          .then(() => this.state.showMessage('Project Saved'))
          .catch((err) => {
            console.log(err);
            this.state.state.current = _STATE_ERROR
           });
    }
  }
  // I've split the the call to the api into a seperate function
  // You can now use apiQuery within the apiService to interact with
  // The backend server. Returns a Promise so that you can use .then if needed
  // (i.e setProjectName after the state has been set)
  // It is set as private to keep it from being used in components etc which
  // Would lead to calls being made all over the place
  // Create public function in this service and call them instead
  private apiQuery(query: string, post?: boolean, postData?: any): Promise<any> {
    if (post === true) {
      return new Promise((resolve, reject) => {
        postData.key = apiKey;
        console.log(postData);
        this.http.post('http://localhost:9393/api/' + query, postData).subscribe(
          (res: any) => {
            console.log(res);
            if (res._body === error) {
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
    } else {
      return new Promise((resolve, reject) => {
        this.http.get('http://localhost:9393/api/'
        + query
        + '&key='
        + apiKey).subscribe(
          (res: any) => {
            console.log(res);
            if (res._body === error) {
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
  }
}