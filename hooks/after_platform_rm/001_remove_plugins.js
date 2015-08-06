#!/usr/bin/env node

//this hook installs all your plugins

var fs = require('fs');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;

var config = require('../../package.json');

var rootdir = process.argv[2];

if (rootdir) {  
    function puts(error, stdout, stderr) {
        sys.puts(stdout)
    }
    
    config.cordova.plugins.forEach(function(plugin){
        exec("cordova plugin rm " + plugin, puts);
    });
}
