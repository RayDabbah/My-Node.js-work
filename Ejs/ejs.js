var express = require('express');
app = express();

app.get("/", function(req, res) {
    res.render("home.ejs");
    });
app.get("/eatapples/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("eatApples.ejs", {thingVar: thing});
});

app.listen(3000, 'localhost', () => console.log('Server has started.'));