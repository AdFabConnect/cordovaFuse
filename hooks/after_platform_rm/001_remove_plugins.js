#!/usr/bin/env node

//this hook installs all your plugins

var fs = require('fs');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;

var config = require('../../config');

var rootdir = process.argv[2];

if (rootdir) {
    var plugins = config.plugins;
    
    function puts(error, stdout, stderr) {
        sys.puts(stdout)
    }
    
    plugins.forEach(function(plugin){
        for (var prop in plugin) {
            //console.log(prop + " is " + plugin[prop]);
            exec("cordova plugin rm " + prop, puts);
         }
    });
}
