import browserSync from 'browser-sync';
import del from 'del';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import scsslint from 'gulp-scss-lint';

const $ = gulpLoadPlugins();

gulp.task('lint', () => {
  return gulp.src([
      './ciku-forms.scss',
      './settings/**/*.scss',
      './mixins/**/*.scss',
      './functions/**/*.scss',
      './elements/**/*.scss',
      './test/**/*.scss'
    ])
    .pipe(scsslint({
      'bundleExec': true
    }));
});

gulp.task('clean', () => {
  del.sync([
      '.tmp'
    ]);
});

gulp.task('sass', () => {
  return gulp.src('./test/test.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 2 version']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('preBuild', (cb) => {
  return runSequence(
    'clean',
    ['sass', 'lint'],
    cb
  );
});

gulp.task('test', ['preBuild'], () => {
  browserSync({
    server: {
      baseDir: ['.tmp', 'test']
    }
  });

  gulp.watch([
      './ciku-forms.scss',
      './settings/**/*.scss',
      './mixins/**/*.scss',
      './functions/**/*.scss',
      './elements/**/*.scss',
      './test/**/*.scss'
    ], ['sass', 'lint']);

  gulp.watch([
    'test/**/*',
    '.tmp/**/*'
  ]).on('change', browserSync.reload);
});

gulp.task('default', () => {
  console.log('Run \`gulp test\` to test');
});
