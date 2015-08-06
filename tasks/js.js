var config        = require('../config');
var gulp          = require('gulp');
var merge         = require('merge-stream');

module.exports = function() {
  return gulp.src('./src/cordovaInit.js')
    .pipe(gulp.dest(config.path.build));
};
