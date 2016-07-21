var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var sass          = require('gulp-sass');
var reload        = browserSync.reload;
var useref        = require('gulp-useref');
var gulpif        = require('gulp-if');
var uglify        = require('gulp-uglify')
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('autoprefixer');
var postcss       = require('gulp-postcss');
var eslint        = require('gulp-eslint');
var size          = require('gulp-size');
var gulpif        = require('gulp-if');
var uglify        = require('gulp-uglify');
var minifyCss     = require('gulp-minify-css');
var htmlmin       = require('gulp-htmlmin');


gulp.task('default',['serve']);

gulp.task('serve',['styles'], function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'app/*.html',
    '.tmp/styles/**/*.css',
    'app/scripts/**/*.js',
    'app/images/**/*'
  ]).on('change', reload);

  gulp.watch("app/scss/*.scss", ['styles', reload]);
});

gulp.task('styles', ['sass'],function(){
  return gulp.src('app/styles/＊.css')
      .pipe(gulp.dest('.tmp/styles'));
});

gulp.task("sass", function() {
  return gulp.src('app/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('lint',function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(size());
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
    .pipe(useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulpif('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});
