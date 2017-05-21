var express = require('express');
var app = express();

// "/" => "Hi There"
app.get("/", function(request, response) {
response.send('HI THERE');
console.log(request);
console.log('With params: ' + request.params);
});
app.get('/goodbye', function(request, response) {
    console.log("SOMEONE MADE A REQUEST TO Goodbye.");
    response.send('Have a great day!!!!');
});
app.get('/g/:name/food/:favFood/game/:favGame', function(request, response) {
    console.log(request.params);
    var nameItem = request.params.name.toUpperCase();
    var favFood = request.params.favFood;
    var favGame = request.params.favGame;
    response.send(`How are you ${nameItem}? \n So nice to see you here!!!
We would like to offer you some of your favorite ${favFood} while you play ${favGame}!!!`);
});
//for git
app.get('/doggies', function(request, response) {
    console.log("SOMEONE MADE A REQUEST TO /DOGGIES!!!");
    response.send('Dogs say Ruff Rufff!!!!!!!!!!!!!!!!!!!!!');
});
app.get("*", function(request, response) {
    console.log("SOMEONE MADE A REQUEST THAT MAKES NO SENSE!!!");
response.send('We are very sorry; the page that you have requested is not in existance.');    
});
app.listen(3000, 'localhost', function () {
    console.log('Server has started');
    });
