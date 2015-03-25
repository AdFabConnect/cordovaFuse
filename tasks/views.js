var config  = require('../config');
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');

// TODO : minify views

module.exports = function() {
  return gulp.src(config.path.views)
    .pipe(plumber({errorHandler: notify.onError({
        message: "<%= error.message %>"
      , title: "Views Error"
    })}))
    .pipe(gulp.dest(config.path.build))
    .on('error', function() {
      this.emit("error", new Error("Views Error"));
    });
};
