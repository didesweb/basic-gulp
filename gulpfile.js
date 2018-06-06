/* Basic gulp concat and minify didesweb.com */

var gulp  = require('gulp'),
concat    = require('gulp-concat'),
uglify    = require('gulp-uglify'),
minifycss = require('gulp-minify-css');

gulp.task('optimiza', ['minify-js', 'minify-css']);

gulp.task('minify-js', function () {
  gulp.src('assets/*.js')
  .pipe(concat('scripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/'))
});

gulp.task('minify-css', function () {
  gulp.src('assets/*.css')
  .pipe(concat('styles.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('app/'))
});