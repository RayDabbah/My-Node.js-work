var express = require('express');
app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", function(req, res) {
	res.render("home");
});
app.get("/eatapples/:thing", function(req, res) {
	var thing = req.params.thing;
	res.render("eatApples", {
		thingVar: thing.toLowerCase()
	});
});
app.get("/posts", function(req, res) {
	var posts = [{
			title: 'Challah',
			taste: `Delicious!`
		},
		{
			title: `Bagels`,
			taste: `Great!`
		},
		{
			title: `Pita Bread`,
			taste: `Awesome!`
		},
		{
			title: `Rolls`,
			taste: `Not Bad.`
		},
		{
			title: `Whole wheat bread`,
			taste: `Michelle Obama...`
		}
	];
	res.render("foodTaste", {
		posts: posts
	});
});
app.get("*", function(req, res) {

	res.send(`You have reached a non-existant page.
         Sorry; Hope you have a better day tomorrow.`);
});

app.listen(3000, 'localhost', () => console.log('Server has started.'));