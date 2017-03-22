const config = require('../config');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').get('server');
const nunjucks = require('gulp-nunjucks');

module.exports = function () {
    gulp.src(config.src.html)
        .pipe(plumber())
        .pipe(nunjucks.compile())
        .pipe(gulp.dest(config.build.html))
        .pipe(browserSync.reload({stream:true}));
};