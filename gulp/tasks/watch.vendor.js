const config = require('../config');
const gulp = require('gulp');
const watch = require('gulp-watch');

module.exports = function() {
    watch([config.watch.vendor], function(event, cb) {
        gulp.start('build.vendor');
    });
};

