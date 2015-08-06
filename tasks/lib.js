var config          = require('../config');
var gulp            = require('gulp');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');

module.exports = function() {
  return gulp.src(config.path.libs)
    .pipe(concat('libs.min.js'))
    // .pipe(uglify({mangle: false}))
    .pipe(gulp.dest(config.path.build+'lib'));
};
