const gulp        = require('gulp');
const tsc         = require('gulp-typescript');
const tsProject   = tsc.createProject('./tsconfig.json');
const sourcemaps  = require('gulp-sourcemaps');
const source      = require('vinyl-source-stream');
const browserify  = require('browserify');
const watchify    = require('watchify');
const browserSync = require('browser-sync');
const watch       = require('gulp-watch');
const runSequence = require('run-sequence');
const rimraf      = require('gulp-rimraf');


/** Compile TypeScript sources */
gulp.task('script:compile', () => {
    return gulp.src('src/scripts/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'));
});

/** Bundle JavaScript sources by Watchify */
gulp.task('script:bundle', () => {
    const b = browserify({
        cache: {},
        packageCache: {},
        debug: true
    });
    const w = watchify(b);
    w.add('build/main.js');
    const bundle = () => {
        return w.bundle()
            .pipe(source('app.js'))
            .pipe(gulp.dest('www/'))
            .pipe(browserSync.reload({
                stream: true
            }));
    };
    w.on('update', bundle);
    return bundle();
});

/** Run Web server */
gulp.task('serve', () => {
    return browserSync.init(null, {
        server: {
            baseDir: 'www/'
        },
        reloadDelay: 1000
    })
});


gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('www/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('watch', () => {
    watch('src/scripts/**/*.ts', () => gulp.start('script:compile'));
    return watch('src/**/*.html', () => gulp.start('html'));
});


gulp.task('clean', () => {
    return gulp.src(['www/', 'build/'])
        .pipe(rimraf());
});


gulp.task('default', () => runSequence('clean', ['html', 'script:compile'], 'script:bundle', ['serve', 'watch']));
