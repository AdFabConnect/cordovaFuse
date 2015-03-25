var config        = require('../config');
var gulp          = require('gulp');

module.exports = function() {
  return gulp.src(config.path.fonts)
    .pipe(gulp.dest(config.path.buildAssets+'fonts'));
};
