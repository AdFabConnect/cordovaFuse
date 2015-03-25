var config        = require('../config');
var gulp          = require('gulp');

// TODO : find a way to merge library styles and scripts to application source
// or at least together

module.exports = function() {
  return gulp.src(config.libPath, { base: config.path.libBase })
    .pipe(gulp.dest(config.path.build+'lib'));
};
