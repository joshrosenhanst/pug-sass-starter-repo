const { src, dest, parallel, watch, series } = require('gulp');
const clean = require('gulp-clean');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

const sassOptions = {
  outputStyle: 'compressed'
};

function copy() {
  return src('src/assets/**')
    .pipe(dest('dist/assets'));
}

function html() {
  return src('src/pug/templates/*.pug')
    .pipe(pug())
    .pipe(dest('dist'))
}

function css() {
  return src('src/sass/*.s*ss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'))
}

function css_build() {
  // no source maps
  return src('src/sass/*.s*ss')
    .pipe(sass(sassOptions))
    .pipe(autoprefixer())
    .pipe(dest('dist/css'))
}

exports.html = html;
exports.css = css;
exports.copy = copy;
exports.build = series(copy, parallel(html, css_build));
exports.default = function() {
  console.log("Now watching directories...")
  watch(['src/sass/*.s*ss', 'src/pug/**/*.pug', 'src/assets/**'], series(copy, parallel(html, css)) );
};