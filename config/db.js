var express = require('express');

var port = process.env.PORT || 3000;
var ip = '0.0.0.0';

var mongoHost = process.env.DB_HOST;
var mongoPort = process.env.DB_PORT;
var mongoDatabase = process.env.DB_NAME;
var mongoUser = process.env.DB_USER;
var mongoPassword = process.env.DB_PASS;

var mongoURLLabel = 'mongodb://' + mongoHost + ':' + mongoPort + '/' + mongoDatabase;
var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDatabase;

module.exports = { port: port, ip: ip, url: mongoURL, label: mongoURLLabel };
