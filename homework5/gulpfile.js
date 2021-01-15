const { watch } = require('gulp');
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');

gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('autoprefixer', function () {
    return gulp.src('app/css/*.css')
        .pipe(autoprefixer({
            cascade: false,
            overrideBrowserslist: ['last 20 versions']
        }))
        .pipe(gulp.dest('public/css/'))
        .pipe(connect.reload());
});

gulp.task('minimage', function () {
    return gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img/'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('public/'))
        .pipe(connect.reload());
});


gulp.task('watch', function() {
    gulp.watch('app/css/*.css', gulp.series('autoprefixer'));
    gulp.watch('app/img/*', gulp.series('minimage'));
    gulp.watch('app/**/*.html', gulp.series('html'));
});

gulp.task('default', gulp.parallel('connect', 'watch'));

