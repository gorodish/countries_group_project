var Countries = require('../models/countries');

var UI = function(countries) {
  // var countries = new Countries();
  // console.log(countries);
  // countries.all(function(result) {
  //   this.render(result);
  // }.bind(this));
}

//   UI.prototype = {
//     createText: function(text, label) {
//       var p = document.createElement('p');
//       p.innerText = label + text;
//       return p;
//     },

//     appendText: function(element, text, label) {
//       var pTag = this.createText(text, label);
//       element.appendChild(pTag);
//     },

//     render: function(countries) {
//       var container = document.getElementById('countries');

//       for (var country of countries) {
//         var li = document.createElement('li');
//         this.appendText(li, country.name, 'Country: ');
//       // this.appendText(li, film.genre, 'Genre: ');
//       // this.appendText(li, film.actors, 'Actors: ');

//       container.appendChild(li);
//     }
//   }
// }

module.exports = UI;
