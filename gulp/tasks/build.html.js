const config = require('../config');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rigger = require('gulp-rigger');
const browserSync = require('browser-sync').get('server');

module.exports = function () {
    gulp.src(config.src.html)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(config.build.html))
        .pipe(browserSync.stream());
};