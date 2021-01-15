const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
sass.compiler = require('node-sass');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "public/"
        }
    });
    browserSync.watch('public/**/*').on('change', browserSync.reload)
});

gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(rename({suffix: '.min'}))
      .pipe(cleanCSS())
      .pipe(gulp.dest('public/css'));
  });

gulp.task('watchSass', function() {
    gulp.watch('app/scss/*.scss', gulp.series('sass'));
});

gulp.task('html', function() {
    return gulp.src('app/**/*.html')
    .pipe(gulp.dest('public/'));
});

gulp.task('watchHTML', function() {
    gulp.watch('app/**/*.html', gulp.series('html'));
});

gulp.task('default', gulp.parallel('browser-sync', 'watchSass', 'watchHTML'));


