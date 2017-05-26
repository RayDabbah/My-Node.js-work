var express = require("express");
var app = express();
var request = require('request');
request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22jackson%2C%20nj%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body) {
	if (error) {
		console.log('error:', error); // Print the error if one occurred
	}
	if (!error && response.statusCode == 200) {
		//console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
		var parsed = JSON.parse(body);
		app.get("/shkiah", (req, res) => res.send(`Shkiah in Jackson is ${parsed["query"]["results"]["channel"]["astronomy"]["sunset"]}`));

		app.get("/netz", (req, res) => res.send(`Netz hachamah in Jackson is ${parsed["query"]["results"]["channel"]["astronomy"]["sunrise"]}`));
        app.get("*", (req, res) => res.send(`You have reached an incorrect page.`));
    }
});
app.listen(3000, "localhost", ()=> console.log(`The server has started.`));