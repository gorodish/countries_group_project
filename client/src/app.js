var UI = require('./views/ui');

var app = function() {
  new UI();
  console.log("Hi");
}

window.onload = app;