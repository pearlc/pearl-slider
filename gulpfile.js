// include gulp
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');


gulp.task('analysis', function() {
    gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('compress', function() {
    gulp.src('src/*.js')
        .pipe(concat('pearl-slider.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['analysis', 'compress']);