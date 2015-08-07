var gulp            = require('gulp'),
    del             = require('del'),
    jshint          = require('gulp-jshint'),
    notify          = require('gulp-notify'),
    plumber         = require('gulp-plumber'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    runSequence     = require('run-sequence'),
    source          = require('vinyl-source-stream'),
    browserify      = require('browserify');

var config = { path: { 
    build:          './www/',
    buildAssets:    './www/assets/',
    styles:         ['./src/assets/scss/**/*.scss'],
    images:         ['./src/assets/img/**/*'],
    fonts:          ['./src/assets/fonts/**/*'],
    js:             ['./src/assets/js/*'],
    scriptsEntry:   './src/modules/app.js', 
    scripts:        ['./src/modules/**/*.js'], 
    views:          ['./src/**/*.html']
}};

gulp.task('fonts', function() {
    return gulp
        .src(config.path.fonts)
        .pipe(gulp.dest(config.path.buildAssets + 'fonts'));
});

// TODO minify images
gulp.task('images', function() {
    return gulp
        .src(config.path.images)
        .pipe(gulp.dest(config.path.buildAssets + 'img'));
});

gulp.task('views', function() {
    return gulp
        .src(config.path.views)
        .pipe(gulp.dest(config.path.build));
});

gulp.task('jshint', function() {
    return gulp
        .src(config.path.scripts.concat([config.path.scriptsEntry]))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .on('error', notify.onError({
            message: "<%= error.message %>",
            title: "JSHint error"
        }));
});

// TODO : optimize css with gulp-cssmin and gulp-uncss
// TODO : configure autoprefixer only for the targeted browsers
gulp.task('styles', function() {
    return gulp
        .src(config.path.styles)
        .pipe(plumber({errorHandler: notify.onError({
            message: "<%= error.message %>",
            title: "SASS Error"
        })}))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.path.buildAssets+'css'))
        .on('error', function() {
            this.emit("error", new Error("SASS Error"));
        });
});

// TODO uglify
gulp.task('scripts', function() {
    return browserify(config.path.scriptsEntry)
        .bundle()
        .on('error', notify.onError({
            message: "<%= error.message %>",
            title: "JS Error"
        }))
        .pipe(source('app.js'))
        .pipe(gulp.dest(config.path.build));
});

gulp.task('clean', function(cb) {
    del(config.path.build, cb);
});

gulp.task('build', ['clean'], function() {
    gulp
        .src('config.xml')
        .pipe(gulp.dest(config.path.build));

    gulp
        .src('./src/cordovaInit.js')
        .pipe(gulp.dest(config.path.build));

  return runSequence(['jshint', 'scripts', 'styles', 'views', 'images', 'fonts']);
});

gulp.task('watch', ['build'],  function() {
    gulp.watch(config.path.styles,  ['styles']);
    gulp.watch(config.path.scripts, ['jshint', 'scripts']);
    gulp.watch(config.path.views,   ['views']);
    gulp.watch(config.path.images,  ['images']);
    gulp.watch(config.path.fonts,   ['fonts']);
});

gulp.task('default', ['build']);
