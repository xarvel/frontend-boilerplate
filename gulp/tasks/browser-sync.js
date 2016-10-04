const config = require('../config');
const browserSync = require('browser-sync').create('server');

module.exports = function() {
    browserSync.init(config.browserSync);
};