#!/usr/bin/env node

//this hook installs all your plugins

// add your plugins to this list--either the identifier, the filesystem location or the URL
var pluginlist = [
    "../simbalphonegap/plugins/fr.adfab.simbalphonegap-1.3.4",
    "../simbalphonegap/plugins/fr.adfab.volumedetectionphonegap",
    "https://github.com/AdFabConnect/cordova-inappbrowser-ce.git",
    "https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git",
    "https://github.com/leecrossley/cordova-plugin-social-message.git",
    "https://github.com/apache/cordova-plugin-splashscreen.git"
];

// no need to configure below

var fs = require('fs');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    sys.puts(stdout)
}

pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});
