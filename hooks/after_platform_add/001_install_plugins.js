#!/usr/bin/env node

//this hook installs all your plugins

var fs = require('fs');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;

var settings = require('../../config/settings.js');

var rootdir = process.argv[2];

if (rootdir) {
	//var ourconfigfile = path.join(rootdir, "config", "project.json");
    //var configobj = JSON.parse(fs.readFileSync(ourconfigfile, 'utf8'));
    var plugins = settings.plugins;
    
    function puts(error, stdout, stderr) {
        sys.puts(stdout)
    }

    plugins.forEach(function(plugin){
        for (var prop in plugin) {
            //console.log(prop + " is " + plugin[prop]);
            exec("cordova plugin add " + plugin[prop], puts);
         }
    });
}