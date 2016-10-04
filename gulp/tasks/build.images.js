const config = require('../config');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').get('server');

module.exports = function() {
    gulp.src(config.src.images)
        .pipe(plumber())
        .pipe(gulp.dest(config.build.images))
        .pipe(browserSync.stream());
};

