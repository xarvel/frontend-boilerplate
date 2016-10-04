const config = require('../config');
const gulp = require('gulp');

module.exports = function() {
    gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.dist.fonts))
};

