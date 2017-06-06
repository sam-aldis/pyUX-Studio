"use strict";
exports.__esModule = true;
var express = require("express");
var api_functions_1 = require("./api.functions");
var apiKey = '3af4g30saf4jqfjpa49i21fkjkbkaod';
exports.APIS = [
    {
        'path': '/api/new',
        'data': function (req) {
            if (req.project_name !== undefined) {
                new api_functions_1.CreateNewProject(req.project_name).create();
                return 'created project';
            }
            else {
                return 'Error Creating Project';
            }
        }
    },
    {
        'path': '/api/open',
        'data': function (req) {
            if (req.project_name !== undefined) {
                var rdata = new api_functions_1.LoadProject(req.project_name).content();
                return rdata.toString();
            }
        }
    }
];
var Server = (function () {
    function Server() {
        this.app = express();
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
        exports.APIS.forEach(function (api) {
            console.log('**API PATH LOADED ', api.path);
            _this.app.get(api.path, function (req, res) {
                if (req.query.key !== undefined && req.query.key === apiKey) {
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
    };
    return Server;
}());
exports["default"] = Server;
var server = new Server();
