var config = require('../config');
var gulp   = require('gulp');
var notify = require('gulp-notify');

// TODO : minify views

module.exports = function() {
  return gulp.src(config.path.views)
    .pipe(gulp.dest(config.path.build))
    .on('error', notify.onError({
        message: "<%= error.message %>"
      , title: "Jade Error"
    }));
};
