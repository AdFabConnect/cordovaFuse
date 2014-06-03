#!/usr/bin/env node

/**
 * This hook copies configuration custom to plist
 * 
 * eg. All folders/files from /config/ios/Resources/* are moved to
 * /platforms/ios/YourApp/Resources/*
 */

var fs = require('fs');
var path = require('path');
var plist = require('plist');

var settings = require('../../config/settings.js');

// no need to configure below
var rootdir = process.argv[2];

// loop through all files in the config directory
var platformConfigs = fs.readdirSync(rootdir+"/config");

platformConfigs.forEach(function(platformName) {
    if(platformName != 'icon-resize' && platformName[0] != "." && fs.lstatSync(rootdir+"/config/"+platformName).isDirectory()) {
	    var plistFile = rootdir+"/platforms/"+platformName+"/"+settings.appName+"/"+settings.appName+"-Info.plist";
	    var obj = plist.parse(fs.readFileSync(plistFile, "utf8"));
	    var i;
	    
	    for(i in settings.plist) {
	        obj[i] = settings.plist[i];
	    }
	
	    fs.writeFile(plistFile, plist.build(obj), function(err) {
	        if(err) {
	            console.log(err);
	        } else {
	            console.log("The plist file has been updated");
	        }
	    });
    }
});