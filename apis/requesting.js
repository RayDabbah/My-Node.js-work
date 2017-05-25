var request = require('request');
request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22jackson%2C%20nj%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, response, body) {
    if (error) {
  console.log('error:', error); // Print the error if one occurred
    } if (!error && response.statusCode == 200) {
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  var parsed = JSON.parse(body);
  console.log(`Shkiah in Jackson עיר התורה is`);
  console.log(parsed["query"]["results"]["channel"]["astronomy"]["sunset"]);
  console.log(`Netz hachamah in Jackson עיר התורה is`);
  console.log(parsed["query"]["results"]["channel"]["astronomy"]["sunrise"]);
        }
    
});