var ant = require('postcss-ant');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var cssnano = require('cssnano');
var cssnext = require('cssnext');
var gulp = require('gulp');
var mqpacker = require('css-mqpacker');
var postcss = require('gulp-postcss');
var rucksack = require('gulp-rucksack');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var nunjucksRender = require('gulp-nunjucks-render');
var gutil = require('gulp-util');
var critical = require('critical').stream;

var src = {
    scss: 'src/stylesheets/**/*.scss',
    images: 'src/images/**/*.+(png|jpg|svg|gif)',
    templates: 'src/templates/**/*.+(html|nunjucks)',
    pages: 'src/pages/**/*.+(html|nunjucks)',
    scripts: 'src/scripts/**/*.js',
    fonts: 'src/fonts/**/*.*'
};

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch(src.scss, ['styles']);
    gulp.watch(src.templates, ['nunjucks']);
    gulp.watch(src.pages, ['nunjucks']);
    gulp.watch(src.images, ['images']);
    gulp.watch(src.fonts, ['fonts']);
});


// Templates
gulp.task('nunjucks', function() {
    return gulp.src(src.pages)
    .pipe(nunjucksRender({
        path: ['src/templates']
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});


// Scripts
gulp.task('scripts', function() {
    return gulp.src(src.scripts)
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});



// Fonts
gulp.task('fonts', function() {
    return gulp.src(src.fonts)
        .pipe(gulp.dest('./dist/fonts'))
        .pipe(browserSync.stream());
});


// Images
gulp.task('images', function() {
    return gulp.src(src.images)
        .pipe(gulp.dest('./dist/images'))
        .pipe(browserSync.stream());
});


// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
    return gulp.src('dist/*.html')
        .pipe(critical({base: 'dist/', inline: true, minify: true, css: ['dist/css/main.css']}))
        .on('error', function(err) { gutil.log(gutil.colors.red(err.message)); })
        .pipe(gulp.dest('dist'));
});


// Compile sass into CSS
gulp.task('styles', function() {
    var processors = [
        ant,
        rucksack,
        autoprefixer({browsers:['last 2 versions']}),
        mqpacker,
        cssnano
    ]

    return gulp.src('./src/stylesheets/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(rucksack())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

    gulp.task('default', ['serve', 'nunjucks', 'images', 'scripts', 'fonts']);
