"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var api_functions_1 = require("./api.functions");
var apiKey = '3af4g30saf4jqfjpa49i21fkjkbkaod';
var error = '0x00';
// This needs to be changed in production but allows accessOrigin header for angular in dev mode at the moment
var accessOrigin = 'http://localhost:4200';
exports.GET_APIS = [
    {
        'path': '/api/new',
        'data': function (req) {
            if (req.project_name !== undefined) {
                var ret = new api_functions_1.CreateNewProject(req.project_name).create();
                return ret;
            }
            else {
                return error;
            }
        }
    },
    {
        'path': '/api/open',
        'data': function (req) {
            if (req.project_name !== undefined) {
                try {
                    var rdata = new api_functions_1.LoadProject(req.project_name).content();
                    return rdata;
                }
                catch (e) {
                    return error;
                }
            }
            else {
                return error;
            }
        }
    },
];
exports.POST_APIS = [
    {
        'path': '/api/save',
        'data': function (req) {
            try {
                console.log(req.project_data);
                var forwrite = req.project_data;
                var status_1 = new api_functions_1.SaveToProject(req.project_name).writeAll(forwrite)
                    .then(function (pret) {
                    return 'saved';
                })["catch"](function (err) {
                    console.log(err);
                    return error;
                });
                return status_1;
            }
            catch (e) {
                console.log(e);
                return error;
            }
        }
    }
];
var Server = (function () {
    function Server() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.listen(9393, 'localhost', 1, function () {
            console.log('listening on localhost:9393');
        });
        this.app.get('/', function (req, res) {
            res.write('Welcome to the pyUX project, you should\'t be looking here..\n\
visit our github project instead. http://github.com/sam-aldis/pyUX/\n\
any help you can provide would be AWESOME :)\n\
- Sam Aldis [UKJP-Design]');
            res.end();
        });
        this.config();
    }
    Server.prototype.config = function () {
        var _this = this;
        exports.GET_APIS.forEach(function (api) {
            console.log('** GET API PATH LOADED ', api.path);
            _this.app.get(api.path, function (req, res) {
                if (req.query.key !== undefined && req.query.key === apiKey) {
                    res.header('Access-Control-Allow-Origin', accessOrigin);
                    var data = api.data(req.query);
                    res.write(data);
                    res.end();
                }
                else {
                    res.write('Not Authorized');
                    res.end();
                }
            });
        });
        exports.POST_APIS.forEach(function (api) {
            console.log('** POST API PATH LOADED ', api.path);
            _this.app.post(api.path, function (req, res) {
                if (req.body.key !== undefined && req.body.key === apiKey) {
                    res.header('Access-Control-Allow-Origin', accessOrigin);
                    var data = api.data(req.body);
                    data.then(function () {
                        res.write('saved');
                        res.end();
                    })["catch"](function (e) {
                        res.write(error);
                        res.end();
                    });
                }
                else {
                    res.write('Not Authorized');
                    res.end();
                }
            });
        });
    };
    return Server;
}());
exports["default"] = Server;
var server = new Server();
