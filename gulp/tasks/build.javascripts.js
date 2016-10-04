const config = require('../config');

const gulp = require('gulp');
const browserify = require('browserify');
const browserSync = require('browser-sync').get('server');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const rename = require('gulp-rename');
const glob = require('glob');
const es = require('event-stream');

module.exports = function() {
    glob(config.src.javascripts, function(err, files) {
        if(err) done(err);

        var tasks = files.map(function(entry) {
            return browserify({ entries: [entry] , extensions: ['.js'], debug: true})
                .transform(babelify, { presets: ['es2015'],sourceMapsAbsolute: true })
                .bundle()
                .pipe(source(entry.replace(/^.*[\\\/]/, '')))
                .pipe(rename({
                    extname: '.bundle.js'
                }))
                .pipe(gulp.dest(config.build.javascripts))
                .pipe(browserSync.stream());
        });
        es.merge(tasks);
    })
};



