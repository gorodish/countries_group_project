/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function() {
	  new UI();
	  console.log("Hi");
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Countries = __webpack_require__(2);
	
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


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Countries = function() {
	var url = "https://restcountries.eu/rest/v2";
	}
	
	var markRequest = function(url, callback) {
	  // create a new XmlHttpRequest object
	  var request = new XMLHttpRequest();
	  console.log(request);
	  // set the type of request, and the URL
	  request.open("GET", url);
	  // set the callback we want it to use when the request is complete
	  request.onload = callback;
	  // send the request
	  request.send();
	};
	
	var requestComplete = function() {
	  // console.log("FIT!!!");
	  if(this.status !== 200) {
	    // this.status is a variable on XMLHttpRequest instance
	    return;
	  }
	
	  // grab the response text
	  var jsonString = this.responseText;
	  var countries = JSON.parse(jsonString);
	console.log(countries);
	  populateList(countries);
	};
	
	var populateList = function(countries) {
	  var select = document.getElementById("dropdown-countries");
	  countries.forEach(function(country) {
	    option = document.createElement('option');
	    // var aLink = document.createElement('a');
	    // aLink.href = country.flag;
	    option.innerText = country.name;
	    // li.appendChild(aLink);
	    select.appendChild(option);
	  })
	
	  select.onchange = function(){
	    var selected = this.value;
	    console.log(countries);
	    for (country of countries) {
	      if (selected === country.name) {
	        makeCountryInfo(country);
	      }
	    }
	  };
	};
	
	
	var makeCountryInfo = function(country) {
	  console.log(country);
	  // DOM stuff
	  var pTag1 = document.querySelector('#select-result1');
	  console.log(country.name);
	  pTag1.innerText = "Name: " + country.name;
	
	  var pTag2 = document.querySelector('#select-result2');
	  pTag2.innerText = "Population: " + country.population;
	
	  var pTag3 = document.querySelector('#select-result3');
	  pTag3.innerText = "Capital City: " + country.capital;
	
	  var pTag4 = document.querySelector('#select-result4');
	  pTag4.innerHTML = '<a href="'+ country.flag + '">flag</a>';
	}
	
	// var handleSelectChanged = function(country) {
	//   var pTag1 = document.querySelector('#select-result1');
	//   console.log(country.name);
	//   pTag1.innerText = "Name: " + country.name;
	//   pTag2.innerText = "Name: " + country.population;
	
	  // var pTag2 = document.querySelector('#select-result2');
	  // pTag2.innerText = country.population;
	// }
	
	// var app = function(){
	//   var url = "https://restcountries.eu/rest/v2";
	  
	//   var select = document.querySelector('select');
	//   select.onclick = function() {
	//     markRequest(url, requestComplete);
	
	//     var select = document.querySelector('select');
	//     select.onchange = makeCountryInfo;
	//   };
	// };
	
	module.exports = Countries;
	


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map