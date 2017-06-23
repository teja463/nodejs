var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');

gulp.task('default',['browser-sync'],function(){
    gutil.log('Gulp started');
});

gulp.task('browser-sync',function(){
    browserSync.init({
        serer:({
            baseDir:"./"
        })
    })
})