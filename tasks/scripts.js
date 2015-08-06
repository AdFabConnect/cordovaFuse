var config      = require('../config');
var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var plumber     = require('gulp-plumber');
var notify      = require("gulp-notify");
var merge       = require('merge-stream');

// TODO : minify scripts

module.exports = function() {
  var stream1 = browserify(config.path.scriptsEntry)
    .bundle()
    .on('error', notify.onError({
      message: "<%= error.message %>",
      title: "JS Error"
    }))
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.path.build))
    ;

    var stream2 = gulp.src('./src/cordovaInit.js')
        .pipe(gulp.dest(config.path.build));

    return merge(stream1, stream2);
};
