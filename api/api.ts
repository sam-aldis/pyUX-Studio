import { ExceptionInfo } from '_debugger';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { CreateNewProject, LoadProject } from './api.functions';

const apiKey = '3af4g30saf4jqfjpa49i21fkjkbkaod';
const error = '0x00';
// This needs to be changed in production but allows accessOrigin header for angular in dev mode at the moment
const accessOrigin = 'http://localhost:4200';

export const APIS = [
    {
        'path' : '/api/new',
        'data' : (req) => {
            if (req.project_name !== undefined) {
                const ret = new CreateNewProject(req.project_name).create();
                return ret;
            } else {
                return error;
            }
        }
    },
    {
        'path' : '/api/open',
        'data' : (req) => {
            if (req.project_name !== undefined) {
                try {
                    const rdata = new LoadProject(req.project_name).content();
                    return rdata;
                } catch (e) {
                    return error;
                 }
            } else {
                return error;
            }
        }
    }
];

export default class Server  {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.app.listen(9393, 'localhost', 1, () => {
            console.log('listening on localhost:9393');
         });
        this.app.get('/', (req, res) => {
            res.write('Welcome to the pyUX project, you should\'t be looking here..\n\
visit our github project instead. http://github.com/sam-aldis/pyUX/\n\
any help you can provide would be AWESOME :)\n\
- Sam Aldis [UKJP-Design]');
            res.end();
        });
        this.config();
    }
    config() {
        APIS.forEach(api => {
            console.log('**API PATH LOADED ', api.path);
            this.app.get(api.path, (req, res) => {
                if (req.query.key !== undefined && req.query.key === apiKey) {
                    res.header('Access-Control-Allow-Origin', accessOrigin);
                    const data = api.data(req.query);
                    res.write(data);
                    res.end();
                } else {
                    res.write('Not Authorized');
                    res.end();
                }
            });
        });
    }
}

const server = new Server();
