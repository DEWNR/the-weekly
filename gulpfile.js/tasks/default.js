var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')

var assetTasks = ['fonts', 'images']
var codeTasks = ['html', 'css', 'js']

var defaultTask = function(cb) {
    gulpSequence(assetTasks, codeTasks, cb)
}

gulp.task('default', defaultTask)
module.exports = defaultTask
