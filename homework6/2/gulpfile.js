const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "www"
        }
    });
    gulp.watch('www/css/*.css').on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('www/css/'));
});

gulp.task('watchSASS', function(){
    gulp.watch('app/scss/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('browser-sync', 'watchSASS'));