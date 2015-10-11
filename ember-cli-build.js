/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  // yaml parser
  app.import({
    'development': 'bower_components/yamljs/bin/yaml.js',
    'production':  'bower_components/yamljs/bin/yaml.min.js'
  });
  // crypto algorithms
  app.import('bower_components/crypto-js/crypto-js.js');
  return app.toTree();
};
