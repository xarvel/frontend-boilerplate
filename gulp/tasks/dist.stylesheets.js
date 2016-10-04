const config = require('../config');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uncss = require('gulp-uncss');
const postcss = require('gulp-postcss');

module.exports = function() {
    gulp.src(config.src.stylesheets)
        .pipe(plumber())
        .pipe(
            postcss([
                require('postcss-import'),
                require('postcss-nested'),
                require('autoprefixer'),
                require('postcss-csso')
            ])
        )
        .pipe(uncss({
            html: [config.src.html],
            ignore: config.uncssignore
        }))
        .pipe(gulp.dest(config.dist.stylesheets));
};