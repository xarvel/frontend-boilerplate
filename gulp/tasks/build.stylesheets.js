const config = require('../config');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').get('server');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

module.exports = function () {
    gulp.src(config.src.stylesheets)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(
            postcss([
                require('postcss-import'),
                require('postcss-nested'),
                require('autoprefixer'),
                require("stylelint")({
                    "rules": {
                        "block-no-empty": null,
                        "color-no-invalid-hex": true,
                        "comment-empty-line-before": [ "always", {
                            "ignore": ["stylelint-commands", "between-comments"],
                        } ],
                        "declaration-colon-space-after": "always",
                        "indentation": [2, {
                            "except": ["value"]
                        }],
                        "max-empty-lines": 2,
                        "rule-nested-empty-line-before": [ "always", {
                            "except": ["first-nested"],
                            "ignore": ["after-comment"]
                        } ],
                        "unit-whitelist": ["em", "rem", "%", "s", "px"]
                    }
                }),
                require("postcss-reporter")({clearMessages: true})
            ])
        )
        .pipe(sourcemaps.write())
        .pipe(rename({
            extname: ".css"
        }))
        .pipe(gulp.dest(config.build.stylesheets))
        .pipe(browserSync.stream());
};




