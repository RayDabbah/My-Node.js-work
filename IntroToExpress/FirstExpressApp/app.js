var express = require('express');
var app = express();

// "/" => "Hi There"
app.get("/", function(request, response) {
response.send('HI THERE');    
});
app.get('/goodbye', function(request, response) {
    console.log("SOMEONE MADE A REQUEST TO Goodbye.");
    response.send('Have a great day!!!!');
});
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
