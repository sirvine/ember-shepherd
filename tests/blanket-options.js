/* eslint-disable */

const options = {
  modulePrefix: 'ember-shepherd',
  filter: '//.*ember-shepherd/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    autostart: true,
    lcovOptions: {
      outputFile: 'lcov.dat',
      renamer: function(moduleName) {
        const expression = /^ember-shepherd/;

        return moduleName.replace(expression, 'addon') +'.js';
      }
    }
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
