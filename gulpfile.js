'use strict';

var gulp = require('gulp');
var src = 'src/';

// plugins

var exec = require('child_process').exec;
var rimraf = require('rimraf');

// tasks

gulp.task('ngc', function (cb) {
  exec('rimraf src/aot && \"node_modules/.bin/ngc\" -p src/tsconfig-aot.json', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('webpack', function (cb) {
  exec('rimraf index.html && rimraf globals.js && webpack --config config/webpack.dev.js --progress --profile', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('webpack-ngc', ['webpack'], function (cb) {
  exec('rimraf src/aot && \"node_modules/.bin/ngc\" -p src/tsconfig-aot.json', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('rollup-dev', ['ngc'], function (cb) {
  exec('rimraf app.js && \"node_modules/.bin/rollup\" -c config/rollup.dev.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('webpack-rollup-dev', ['webpack-ngc'], function (cb) {
  exec('rimraf app.js && \"node_modules/.bin/rollup\" -c config/rollup.dev.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('lite', ['rollup-dev'], function (cb) {
  exec('npm run lite', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('webpack-lite', ['webpack-rollup-dev'], function (cb) {
  exec('npm run lite', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('watch-ts-css-html', function() {
  gulp.watch([src + '**/*.ts', '!' + src + 'aot/**/*'], ['lite']);
  gulp.watch([src + '**/*.html', src + '**/*.css'], ['webpack-lite']);
});


// Default Task
gulp.task('default', ['watch-ts-css-html']);

