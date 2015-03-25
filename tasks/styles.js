var config        = require('../config');
var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var notify        = require('gulp-notify');

// TODO : optimize css with gulp-cssmin and gulp-uncss
// TODO : configure autoprefixer only for the targeted browsers

module.exports = function() {
  return gulp.src(config.path.styles)
    .pipe(plumber({errorHandler: notify.onError({
        message: "<%= error.message %>"
      , title: "SASS Error"
    })}))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.path.buildAssets+'css'))
    .on('error', function() {
      this.emit("error", new Error("SASS Error"));
    });
};
