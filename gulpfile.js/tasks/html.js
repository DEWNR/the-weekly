var config       = require('../config')
if(!config.tasks.html) return

var browserSync  = require('browser-sync')
var fs           = require('fs')
var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var gulpSequence = require('gulp-sequence')
var jsoncombine  = require("gulp-jsoncombine")
var path         = require('path')
var render       = require('gulp-nunjucks-render')

var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

var paths = {
    src: [path.join(config.root.src, config.tasks.html.src, '/**/*.html'), exclude],
    dest: path.join(config.root.dest, config.tasks.html.dest),
}

var htmlTask = function(cb) {

    return gulp.src(config.tasks.html.templateFiles)
        .pipe(render({
            path: config.tasks.html.templatePaths,
                envOptions: {
                watch: false
            }
        }))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream())
}

gulp.task('html', htmlTask)

module.exports = htmlTask
