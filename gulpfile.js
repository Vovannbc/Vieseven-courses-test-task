"use strict";

const gulp = require('gulp'),
    less = require('gulp-less'),
    debug = require('gulp-debug'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    gulpif = require('gulp-if'),
    del = require('del'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    rename = require('gulp-rename'),
    shell = require('gulp-shell');

const paths = {
    devDir: 'dev/styles',
    outputDir: 'styles'
};

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

console.log(process.env.NODE_ENV);
console.log(isDevelopment);


//less compile
gulp.task('less', () => {
    return gulp.src([paths.devDir+'/*.less'], {base: paths.devDir})
        .pipe(gulpif(isDevelopment , sourcemaps.init()))
        .pipe(less())
        .pipe(debug({title:'less'}))
        .pipe(postcss([
            autoprefixer({browsers: ['last 2 version']}),
            cssnano()
        ]))
        .pipe(debug({title:'prefix'}))
        .pipe(debug({title:'postcss'}))
        .pipe(debug({title:'cssmin'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(debug({title:'rename'}))
        .pipe(gulpif(isDevelopment , sourcemaps.write()))
        .pipe(gulp.dest('styles'));
});

gulp.task('clean', () => {
    return del(paths.outputDir)
});

gulp.task('server', shell.task('static-server'));

gulp.task('run', gulp.series('clean', gulp.parallel('less', 'server')));

gulp.watch('dev/**/*.less', gulp.series('less'));
