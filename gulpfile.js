var gulp = require('gulp')
var less = require('gulp-less')
var react = require('gulp-react')
var minifyCss = require('gulp-minify-css')
var uglify = require('gulp-uglify')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')

var DEST = './build'

gulp.task('jsxtranform', function(){
    gulp.src('./src/**/*.jsx')
        .pipe(react())
        .pipe(uglify())
        .pipe(gulp.dest(DEST))
})

gulp.task('less', function(){
    gulp.src('./src/**/*.less')
        .pipe(less({
            plugins: [new LessPluginAutoPrefix({ browsers: ["last 2 versions"] })]
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest(DEST))

})

gulp.task('copy', function(){
    // html
    gulp.src(['./src/*.html'])
        .pipe(gulp.dest(DEST))
    // css
    gulp.src(['./src/style/**/*.css',
            './node_modules/normalize.css/normalize.css'])
            .pipe(minifyCss())
            .pipe(gulp.dest(DEST + '/style/'))

    gulp.src(['./src/**/*.+(ttf|woff|woff2)'])
            .pipe(gulp.dest(DEST))
    // js
    gulp.src(['./src/script/**/*.js',
                './node_modules/react/dist/react.js',
                './node_modules/whatwg-fetch/fetch.js'])
        .pipe(uglify())
        .pipe(gulp.dest(DEST + '/script/'))

})

gulp.task('build', ['jsxtranform', 'less', 'copy'])

gulp.task('watch', ['build'], function(){
    gulp.watch('./src/**/*', ['build'])
})

gulp.task('default', ['build'])
