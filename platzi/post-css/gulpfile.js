const gulp = require('gulp')
const post = require('gulp-postcss')
// const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync').create()
const nested = require('postcss-nested')
const next = require('postcss-cssnext')
const mixins = require('postcss-mixins')
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: 'dist/'
    }
  })
})

gulp.task('css', () => {
  const processor = [
    mixins(),
    nested(),
    next({browsers: ['> 1%', 'android > 4']})
  ]
  return gulp.src('./src/*.css')
  .pipe(post(processor))
  .pipe(gulp.dest('dist/'))
})
gulp.task('html', () => {
  return gulp.src('./src/*.html')
  .pipe(gulp.dest('dist/'))
})
gulp.task('js', () => {
  return gulp.src('./src/*.js')
  .pipe(gulp.dest('dist/'))
})

gulp.task('watch', () => {
  gulp.watch('./src/*.css', ['css'])
  gulp.watch('./src/*.html', ['html']).on('change', browserSync.reload)
  gulp.watch('./src/*.js', ['js']).on('change', browserSync.reload)
})

gulp.task('default', ['watch', 'serve', 'html', 'css', 'js'])
