var express = require('express');
var app = express();
app.get("/", function(req, res) {
    res.send("Hello there!! Welcome to my glorious app!!");
});
app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var animalSound = {
        dog: 'Ruff!',
        cat: 'MEOW!',
        fish: '...',
        sheep: 'Baaaaa!'
    };
    if (!animalSound[animal]) {
        res.send(`Sorry; we don't like ${animal.toUpperCase()}S! Please choose one that we do!!`);
    }
    
       else if (animalSound !== '') {
    res.send(`The ${animal} says ${animalSound[animal]}!`);    
    }
});
app.get("/repeat/:hello/:numbers", function(req, res) {
   var hello = req.params.hello;
   var hi = '';
 var numbers = parseInt((req.params.numbers), 10);
 if (isNaN(numbers) === true) {
    res.send("You have reached an incorrect page. :-(");
 }
 for (i = 0; i < numbers; i++ ) {
    hi += hello + '\n';
 }
  console.log(req.params);
   res.send(hi);
});
app.get("*", function(req, res) {
    res.send("Sorry; this page doesn't exist");
    });
app.listen(3000, 'localhost', function () {
    console.log('Server has started');
    });