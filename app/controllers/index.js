export default Ember.Controller.extend({
  init: function() {
    var files = ['credentials_utils.yml', 'credentials_perso.yml', 'credentials_pro.yml', 'credentials_server.yml'];
    var _this = this;
    var results = [];

    for (var i = 0; i < files.length; i++) {
      YAML.load(files[i], function (result) {
        results.push(result);
        if (results.length === files.length) {
          _this.set('sections', results);
        }
      });
    }
  }
});