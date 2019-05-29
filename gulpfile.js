var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var browser = require("browser-sync");
var typescript = require('gulp-typescript');

gulp.task("server", function() {
  browser({
      server: {
          baseDir: "./www"
      }
  });
});

// html
gulp.task('html',function(){
  gulp.src('src/**/*.html', {base: './src/'})
      .pipe(gulp.dest("www"))
});

//sass
gulp.task('sass', function() {
  gulp.src("src/main.scss")
      .pipe(plumber())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(autoprefixer())
      .pipe(rename('app.css'))
      .pipe(gulp.dest("www"))
      .pipe(browser.reload({stream:true}))
});

// typescript
gulp.task('ts', function() {  
  gulp.src('src/**/*.ts')
      .pipe(typescript('main.js'))
      .pipe(gulp.dest('www'))
      .pipe(browser.reload({stream:true}))
});

//build
gulp.task("build", ['html', 'sass', 'ts']);

//タスクの自動化
gulp.task("default", ['build', 'server'], function() {
  gulp.watch("src/**/*.html", ["html"]);
  gulp.watch("src/**/*.scss", ["sass"]);
  gulp.watch("src/**/*.ts", ["ts"]);
});