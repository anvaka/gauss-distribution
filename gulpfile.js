var gulp = require('gulp')
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

//Reloads webpage and any html file changes
gulp.task('default', ['browser-sync'], function(){
  gulp.watch("*.html", ['bs-reload']);
});
