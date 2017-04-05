var Countries = function() {

}

Countries.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },

  all: function(callback){
    this.makeRequest('https://restcountries.eu/rest/v2/all', function() {
      if(this.status != 200) return;
      debugger;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
console.log(results);
      var countries = Countries.prototype.populateCountries(results);
      callback(countries);
      console.log(countries);
    })
  },

  populateCountries: function(results) {
    var countries = [];

    for(var result of results) {
      var country
    }
  }