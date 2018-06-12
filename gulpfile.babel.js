import gulp from 'gulp'
import babel from 'gulp-babel'
import image from 'gulp-image'
import resize from 'gulp-image-resize'
import changed from 'gulp-changed'

const srcDir = './src/!(*.keep)'
const distDir = './dist'

export const squeeze = () => {
  return gulp.src(srcDir)
    .pipe(changed(distDir))
    .pipe(resize({
      width: 256,
      height: 256,
      imageMagick: true
    }))
    .pipe(image())
    .pipe(gulp.dest(distDir));
}
export default squeeze
