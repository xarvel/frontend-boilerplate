const config = require('../config');
const gulp = require('gulp');
const prettify = require('gulp-html-prettify');
const nunjucks = require('gulp-nunjucks');

module.exports = function() {
    gulp.src(config.src.html)
        .pipe(nunjucks.compile())
        .pipe(prettify({indent_char: ' ', indent_size: 2}))
        .pipe(gulp.dest(config.dist.html));
};