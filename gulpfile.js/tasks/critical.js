const critical = require('critical')
const gulp     = require('gulp')

const criticalTask = (cb) => {

  return critical.generate({
    inline: true,
    base: 'public/',
    src: 'index.html',
    dest: 'index.html',
    minify: true,
    ignore: ['@font-face'],
    dimensions: [{
      width: 375,
      height: 667
    }, {
      width: 1300,
      height: 900
    }]
  });
}

gulp.task('critical', criticalTask)
module.exports = criticalTask
