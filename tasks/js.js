var config        = require('../config');
var gulp          = require('gulp');
var merge         = require('merge-stream');

module.exports = function() {
  var assets = gulp.src(config.path.js)
    .pipe(gulp.dest(config.path.buildAssets+'js'));

  var cordovaJs = gulp.src('./src/cordovaInit.js')
    .pipe(gulp.dest(config.path.build));


  return merge(assets, cordovaJs);
};
