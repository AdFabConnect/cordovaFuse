#!/usr/bin/env node

//this hook installs all your plugins
var exec    = require('child_process').exec;
var config  = require('../../package.json');

function puts(error, stdout, stderr) {
    console.log(stdout);
}

config.cordova.plugins.forEach(function(plugin){
    exec("cordova plugin add " + plugin, puts);
});