// Karma configuration
// Generated on Mon Feb 04 2019 09:10:53 GMT-0800 (Pacific Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      'src/test/**/*spec.ts',
      'src/test/*spec.ts',
      'src/test/**/*spec.tsx',
      'src/test/*spec.tsx'
    ],


    // list of files / patterns to exclude
    exclude: [
      ''
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "test/**/*.tsx": ["typescript"],
      "test/*.tsx": ["typescript"]
    },
 
    typescriptPreprocessor: {
      // options passed to the typescript compiler
      options: {
        sourceMap: false, // (optional) Generates corresponding .map file.
        target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
        module: 'amd', // (optional) Specify module code generation: 'commonjs' or 'amd'
        noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
        noResolve: true, // (optional) Skip resolution and preprocessing.
        removeComments: true, // (optional) Do not emit comments to output.
        concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    /*
    * This field is necessary because we are using webpack as a preprocessor.
    * You will need to specify the webpack configuration (although in this
    * case, we are simply leveraging the existing webpack.config.js file).
    *
    * If you have a different webpack.config.js file that's used for testing
    * purposes, you can specify that here.
    */  
   webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    }
  })
}
