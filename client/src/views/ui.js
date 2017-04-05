var Films = require('../models/countries');

var UI = function() {
  var countries = new Countries();
  countries.all(function(result) {
    this.render(result);
  }.bind(this));

  this.createForm();
}

UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  }


module.exports = UI;
