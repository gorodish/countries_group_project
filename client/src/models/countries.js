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
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      var countries = Countries.prototype.populateCountries(results);
      callback(countries);
      console.log(countries);
    })
  }