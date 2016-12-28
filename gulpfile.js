var ant = require('postcss-ant');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var cssnano = require('cssnano');
var cssnext = require('cssnext');
var gulp = require('gulp');
var mqpacker = require('css-mqpacker');
var postcss = require('gulp-postcss');
var rucksack = require('rucksack')
var sass = require('gulp-sass');

var src = {
    scss: 'src/stylesheets/**/*.scss',
    images: 'src/images/**/*.png',
    html: 'src/html/**/*.html'
};

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch(src.scss, ['styles']);
    gulp.watch(src.html, ['templates']);
    gulp.watch(src.images, ['images']);
});


// Templates
gulp.task('templates', function() {
    return gulp.src(src.html)
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});


// Images
gulp.task('images', function() {
    return gulp.src(src.images)
        .pipe(gulp.dest('./dist/images'))
        .pipe(browserSync.stream());
});


// Compile sass into CSS
gulp.task('styles', function() {
    var processors = [
        ant,
        autoprefixer({browsers:['last 2 versions']})
    ]

    return gulp.src('./src/stylesheets/main.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'templates', 'images']);
