var ant = require('postcss-ant');
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
var cssnext = require('cssnext')
var gulp = require('gulp');
var mqpacker = require('css-mqpacker')
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

// var rucksack = require('rucksack')

gulp.task('styles', function() {
    var processors = [
        ant,
        autoprefixer({browsers:['last 2 versions']})
    ]

    return gulp.src('./src/stylesheets/main.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch:styles', function() {
    gulp.watch('./src/stylesheets/**/*.scss', ['styles']);
});
