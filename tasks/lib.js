var config          = require('../config');
var gulp            = require('gulp');
var mainBowerFiles  = require('main-bower-files');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');

module.exports = function() {
  return gulp.src(mainBowerFiles())
    .pipe(concat('libs.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest(config.path.build+'lib'));
};
