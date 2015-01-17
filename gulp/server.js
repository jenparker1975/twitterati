var gulp = require('gulp');

gulp.task('dev:server', function() {
    var nodemon = require('gulp-nodemon');
    nodemon({
            script: 'server.js',
            ext: 'js',
            ignore: ['ng*', 'gulp*', 'assets*']
        }
    );
});