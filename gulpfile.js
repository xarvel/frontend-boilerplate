var gulp = require('./gulp')([
    'browser-sync',

    'build.fonts',
    'dist.fonts',
    'watch.fonts',

    'build.images',
    'dist.images',
    'watch.images',

    'build.stylesheets',
    'dist.stylesheets',
    'watch.stylesheets',

    'build.javascripts',
    'dist.javascripts',
    'watch.javascripts',

    'build.html',
    'dist.html',
    'watch.html',
    
    'build.vendor',
    'dist.vendor',
    'watch.vendor'
]);

gulp.task('build', ['build.images', 'build.fonts', 'build.stylesheets', 'build.javascripts', 'build.html','build.vendor']);
gulp.task('dist', ['dist.images', 'dist.fonts', 'dist.stylesheets', 'dist.javascripts', 'dist.html','dist.vendor']);
gulp.task('watch', ['watch.images', 'watch.fonts', 'watch.stylesheets', 'watch.javascripts', 'watch.html','watch.vendor']);

gulp.task('default', ['browser-sync', 'build', 'watch']);
