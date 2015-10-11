export default Ember.Controller.extend({
  init: function() {
    var _this = this;
    YAML.load('credentials.yml', function(result)
    {
        _this.set('credentials',result);
    });
  }
});