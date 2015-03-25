var config      = require('./config');
var runSequence = require('run-sequence');
var gulp        = require('gulp');
var del         = require('del');


gulp.task('scripts', require('./tasks/scripts'));
gulp.task('styles', require('./tasks/styles'));
gulp.task('views', require('./tasks/views'));
gulp.task('images', require('./tasks/images'));
gulp.task('fonts', require('./tasks/fonts'));
gulp.task('js', require('./tasks/js'));
gulp.task('lib', require('./tasks/lib'));

/**
 * Clean build directory (www)
 */
gulp.task('clean', function(cb) {
  del(config.path.build, cb);
});

/**
 * Build app from sources
 */
gulp.task('build', ['clean'], function() {
  gulp.src('config.xml')
    .pipe(gulp.dest(config.path.build));
  return runSequence(['scripts', 'styles', 'views', 'images', 'fonts', 'js', 'lib']);
});

/**
 * Watch task for development
 */
gulp.task('watch', ['build'],  function() {

  gulp.watch(config.path.styles,  ['styles']);
  gulp.watch(config.path.scripts, ['scripts']);
  gulp.watch(config.path.views,   ['views']);
  gulp.watch(config.path.images,  ['images']);
  gulp.watch(config.path.fonts,   ['fonts']);
  gulp.watch(config.path.js,   	  ['js']);
  gulp.watch(config.libPath,      ['lib']);

});

gulp.task('default', ['build']);
