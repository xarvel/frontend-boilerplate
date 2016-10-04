const config = require('../config');
const gulp = require('gulp');
const browserSync = require('browser-sync').get('server');

module.exports = function() {
    gulp.src(config.src.vendor)
        .pipe(gulp.dest(config.build.vendor))
        .pipe(browserSync.stream());
};