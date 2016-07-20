var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var reload      = browserSync.reload;
var useref      = require('gulp-useref');
var gulpif      = require('gulp-if');
var uglify      = require('gulp-uglify')


gulp.task('default',['serve']);

gulp.task('serve', function() {
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
  return gulp.src('app/styles/main.css')
      .pipe(gulp.dest('.tmp/styles'));
});

gulp.task("sass", function() {
  return gulp.src('app/scss/*.scss')
    .pipe(saas())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream: true}));
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
      .pipe(useref({searchPath: ['.tmp', 'app', '.']}))
      .pipe(gulpif('*.js', uglify()))
      .pipe(gulp.dest('dist'));
});
