
var gulp         = require('gulp')
var critical = require('critical').stream;

var criticalTask = function(cb) {

    return gulp.src('public/*.html')
        .pipe(critical({base: 'public/', inline: true, minify: true, css: ['public/css/main.css']}))
        .pipe(gulp.dest('public'));
}

gulp.task('critical', criticalTask)

module.exports = criticalTask
