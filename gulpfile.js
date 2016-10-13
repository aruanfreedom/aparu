(function() {

'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('css'));

}); 

gulp.watch("scss/*.scss", ['sass']);

gulp.task('default', ['sass']);

})();
