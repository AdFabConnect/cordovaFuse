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

var config = require('./config');

// no need to configure below
var rootdir = process.argv[2];

// loop through all files in the config directory
// go through each of the platform directories that have been prepared
var platforms = (process.env.CORDOVA_PLATFORMS ? process.env.CORDOVA_PLATFORMS.split(',') : []);

for(var x=0; x<platforms.length; x++) {
  // open up the index.html file at the www root
  try {
    var platform = platforms[x].trim().toLowerCase();

    if(platform == 'ios') {
      
      var plistFile = rootdir+"/platforms/"+platformName+"/"+config.appName+"/"+config.appName+"-Info.plist";
      var obj = plist.parse(fs.readFileSync(plistFile, "utf8"));
      var i;
      
      for(i in config.plist) {
          obj[i] = config.plist[i];
      }
      
      fs.writeFile(plistFile, plist.build(obj), function(err) {
          if(err) {
              console.log(err);
          } else {
              console.log("The plist file has been updated");
          }
      });

    }

  } catch(e) {
    process.stdout.write(e);
  }
}