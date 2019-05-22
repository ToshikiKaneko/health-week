var gulp = require("gulp");
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

// typescript
gulp.task('ts', function() {  
  gulp.src('src/**/*.ts')
      .pipe(typescript('main.js'))
      .pipe(gulp.dest('www'))
      .pipe(browser.reload({stream:true}))
});

//build
gulp.task("build", ['html']);

//タスクの自動化
gulp.task("default", ['build', 'server'], function() {
  gulp.watch("src/**/*.html", ["html"]);
  gulp.watch("src/**/*.ts", ["ts"]);
});