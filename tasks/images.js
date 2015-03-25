var config        = require('../config');
var gulp          = require('gulp');

// TODO : optimize images with gulp-imagemin and gulp-svgmin

module.exports = function() {
  return gulp.src(config.path.images)
    .pipe(gulp.dest(config.path.buildAssets+'img'));
};
