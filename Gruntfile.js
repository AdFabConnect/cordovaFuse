module.exports = function(grunt) {
    'use strict';
 
    require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);
 
    grunt.initConfig({

        exec:{
            build:{
                command:"cordova build",
                stdout:true,
                stderror:true
            },
            emulate:{
                command:"killall 'iPhone Simulator';ios-sim launch './platforms/ios/build/emulator/OeilDeLinks.app' --family ipad --stderr console.log --stdout console.log &",
                stdout:true,
                stderror:true
            }
        },

        less: {
            dev: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: 'www/css/style.css.map',
                    // This is mandatory for Chrome to parse the less files
                    sourceMapRootpath: 'http://localhost/oeildelinks'
                },
                files: {
                    'www/css/style.css': 'less/style.less'
                }
            }
        },
        watch: {
            all: {
                files: ['less/**/*.less'],
                tasks: ['less']
            },
            cordova: {
                files:['www/**/*.*'],
                tasks:['exec:build']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec'); 
    
    grunt.registerTask('default', ['exec', 'less', 'watch']);
};
