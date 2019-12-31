const gulp = require("gulp");
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const tsify = require("tsify");
const watchify = require("watchify");
const gutil = require("gulp-util");
const terser = require("gulp-terser");
const buffer = require('vinyl-buffer');
const mocha = require('gulp-mocha');

const destination = './dist';

function onError(error) {
  return gutil.log(gutil.colors.red(error.message));
}

function build(debug) {
  return browserify('src/main.ts', {
      standalone: 'bundle',
      debug: debug
    })
    .plugin(tsify);
}

const watchedBrowserify = watchify(build(true));

function bundle() {
  return watchedBrowserify
    .bundle()
    .on('error', onError)
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(terser())
    .pipe(gulp.dest(destination));
}

gulp.task("default", gulp.series(bundle));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);

gulp.task('dev', function() {
  return bundle();
});

gulp.task('run-tests', function() {
  return gulp.src('test/*.spec.ts')
    .pipe(mocha({
      require: ['ts-node/register']
    }));
});