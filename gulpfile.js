var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback');

function compile(watch) {

  var props = {
    debug : true,
    cache: {},
    packageCache: {},
    transform:  [
      babelify.configure({
        presets : ['react', 'es2015', 'stage-0']
      })
    ]
  };
  var bundler = watchify(browserify('./app/main.js', props));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public'))
      .pipe(reload({stream:true}))
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
};


gulp.task('browser-sync', function() {
    browserSync({
        server : {},
        middleware : [ historyApiFallback() ],
        ghostMode: false,
        open: false
    });
});


gulp.task( 'build',
  function () {
    return gulp.src(
        [
          './public/main.js'
        ]
      )
      .pipe(
        uglify()
      )
      .on( 'error', function ( err ) {
        console.log('Error: ' + err );
        this.emit( 'end' );
      })
      .pipe(
        rename('main.min.js')
      )
      .pipe(
        gulp.dest( './public' )
      )
  }
);

gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch', 'browser-sync'], function () {
  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('app/*.css').on('change', browserSync.reload);
});