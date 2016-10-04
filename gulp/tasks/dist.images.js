const config = require('../config');
const gulp = require('gulp');
const plumber = require('gulp-plumber');

module.exports = function() {
    gulp.src(config.src.images)
        .pipe(plumber())
        .pipe(gulp.dest(config.dist.images));
};
