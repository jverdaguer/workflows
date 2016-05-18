const gulp = require('gulp');
const gutil = require('gulp-util');
const coffee = require('gulp-coffee');
const coffeeSources = ['components/coffee/tagline.coffee'];

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});
