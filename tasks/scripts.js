var config      = require('../config');
var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var plumber     = require('gulp-plumber');
var notify      = require("gulp-notify");

// TODO : minify scripts

module.exports = function() {
  return browserify(config.path.scriptsEntry)
    .bundle()
    .pipe(plumber({errorHandler: notify.onError({
        message: "<%= error.message %>"
      , title: "JavaScript Error"
    })}))
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.path.build))
    .on('error', function() {
      this.emit("error", new Error("JavaScript Error"));
    });
};
