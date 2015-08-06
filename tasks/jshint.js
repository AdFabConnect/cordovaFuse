var config  = require('../config'),
    gulp    = require('gulp'),
    jshint  = require('gulp-jshint')
    notify  = require('gulp-notify');

module.exports = function() {
  return gulp
    .src(config.path.scripts.concat([config.path.scriptsEntry]))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .on('error', notify.onError({
      message: "<%= error.message %>",
      title: "JSHint error"
    }))
};