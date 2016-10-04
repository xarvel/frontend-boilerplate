const config = require('../config');
const gulp = require('gulp');
const rigger = require('gulp-rigger');

module.exports = function() {
    gulp.src(config.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(config.dist.html));
};