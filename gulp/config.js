module.exports = {
    src: {
        html: 'src/template/**/*.html',
        fonts: 'src/assets/fonts/**/*.*',
        images: 'src/assets/images/**/*.*',
        stylesheets: 'src/assets/stylesheets/*.css',
        javascripts: 'src/assets/javascripts/*.js',
        vendor: 'src/vendor/**/*.*'
    },
    watch: {
        options: {
            usePolling: true // uncomment for windows
        },
        html: 'src/template/**/*.{html,tpl}',
        fonts: 'src/assets/fonts/**/*.*',
        images: 'src/assets/images/**/*.*',
        stylesheets: 'src/assets/stylesheets/**/*.css',
        javascripts: 'src/assets/javascripts/**/*.js',
        vendor: 'src/vendor/**/*.*'
    },
    build: {
        html: 'build/',
        fonts: 'build/assets/fonts/',
        images: 'build/assets/images/',
        stylesheets: 'build/assets/stylesheets/',
        javascripts: 'build/assets/javascripts/',
        vendor: 'build/vendor/'
    },
    dist: {
        html: 'dist/',
        fonts: 'dist/assets/fonts/',
        images: 'dist/assets/images/',
        stylesheets: 'dist/assets/stylesheets/',
        javascripts: 'dist/assets/javascripts/',
        vendor: 'dist/vendor/'
    },
    uncssignore: {},
    browserSync: {
        scrollElement: '.limits',
        open: false,
        server: {
            baseDir: "./build"
        }
    }
};
