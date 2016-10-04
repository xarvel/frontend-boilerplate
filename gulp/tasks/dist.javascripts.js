const config = require('../config');

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const rename = require('gulp-rename');
const glob = require('glob');
const es = require('event-stream');
const uglify = require('gulp-uglify');

module.exports = function() {
    glob(config.src.javascripts, function(err, files) {
        if(err) done(err);

        let tasks = files.map(function(entry) {
            return browserify({ entries: [entry] , extensions: ['.js']})
                .transform(babelify, { presets: ['es2015']})
                .bundle()
                .pipe(source(entry.replace(/^.*[\\\/]/, '')))
                .pipe(rename({
                    extname: '.bundle.js'
                }))
                .pipe(buffer())
                .pipe(uglify())
                .pipe(gulp.dest(config.dist.javascripts))
        });
        es.merge(tasks);
    })
};

