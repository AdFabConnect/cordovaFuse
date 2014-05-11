#!/usr/bin/env node

/**
 * COPIED FROM
 * http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/
 */

/**
 * This hook copies all files in the config folder into the similar file
 * structure in the appropriate platform resources folder.
 * 
 * eg. All folders/files from /config/ios/Resources/* are moved to
 * /platforms/ios/YourApp/Resources/*
 */

var fs = require('fs');
var path = require('path');
var plist = require('plist');

var appName = "OeilDeLinks";

// no need to configure below
var rootdir = process.argv[2];

// loop through all files in the config directory
var platformConfigs = fs.readdirSync(rootdir+"/config");

platformConfigs.forEach(function(platformName) {
    // ignore files and copy directories contents
    if(platformName[0] != "." && fs.lstatSync(rootdir+"/config/"+platformName).isDirectory()) {
        // look copy all files from this config/Resources folds into the appropriate
        // platform
        var resourcePath = path.join(rootdir+"/config", platformName+"/resources");
        fs.readdirSync(resourcePath).forEach(function(resourceType){
            
            if(resourceType == 'Fonts'){
                var plistFile = rootdir+"/platforms/"+platformName+"/"+appName+"/"+appName+"-Info.plist";
                var obj = plist.parse(fs.readFileSync(plistFile, "utf8"));
                obj['Fonts provided by application'] = [];

                // again ignore hidden files
                if(resourceType[0] != ".") {
                    var resourceTypePath = path.join(resourcePath, resourceType);
                    fs.readdirSync(resourceTypePath).forEach(function(fileName){
                        var srcfile = path.join(resourceTypePath, fileName);
                        // determine destination location
                        var dirLocation = path.join(rootdir,"platforms/"+platformName+"/"+appName+"/Resources/"+resourceType);
                        var destLocation = "platforms/"+platformName+"/"+appName+"/Resources/"+resourceType+"/"+fileName;
                        var destfile = path.join(rootdir, destLocation);
    
                        if (!fs.existsSync(dirLocation)) fs.mkdir(dirLocation);
                        // console.log("copying "+srcfile+" to "+destfile);
    
                        //if (fs.existsSync(srcfile) && fs.existsSync(destfile)) {
                        if (fs.existsSync(srcfile)) {
                            fs.createReadStream(srcfile).pipe(fs.createWriteStream(destfile));
                        }

                        obj['Fonts provided by application'].push(resourceType+"/"+fileName);

                    });
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
    }
});