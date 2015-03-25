var config      = require('../config');
var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var notify      = require("gulp-notify");

// TODO : minify scripts

module.exports = function() {
  return browserify(config.path.scriptsEntry)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.path.build))
    .on('error', notify.onError({
        message: "<%= error.message %>"
      , title: "JavaScript Error"
    }));
};
