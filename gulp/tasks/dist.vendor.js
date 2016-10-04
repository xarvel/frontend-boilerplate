const config = require('../config');
const gulp = require('gulp');

module.exports = function() {
    gulp.src(config.src.vendor)
        .pipe(gulp.dest(config.dist.vendor));
};