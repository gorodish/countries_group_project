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

