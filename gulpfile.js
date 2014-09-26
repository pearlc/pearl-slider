// include gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('compress', function() {
    gulp.src('src/*.js')
        .pipe(concat('pearl-slider.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['compress']);