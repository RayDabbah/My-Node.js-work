var express = require("express");
var app = express();
var request = require('request');


    request("https://api.nasa.gov/EPIC/api/natural?api_key=yU82PqbJaxZd8OnyfTqCM3magdUZQnDgNzXxEQhl", function (error, response, body) {
    var results = JSON.parse(body);
   if (error) {
    console.log(error);
   } if (!error && response.statusCode == 200) {
        app.get("/", (req, res) => {
        res.send(results[0]["image"]);
       // console.log(results);
        });  
    }
    });
app.listen(3000, "localhost", () => console.log('The server is ready.'));