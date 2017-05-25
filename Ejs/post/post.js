var express = require('express');
var bodyParser = require('body-parser');

app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
	extended: true
}));
var friends = ["Moshe", "Yankel", "Mottel", "Shmerel", "Yoeli", "Eli Baruch"];

app.get('/', function(req, res) {
	res.render("friends.ejs", {
		friends: friends
	});
});
app.post('/addfriend', (req, res) => {
	var newFriend = req.body.newFriend;
	friends.push(newFriend);
	console.log((newFriend));
	/*	res.send(`You have reached the post a new friend page.
		His name is ${newFriend}`);*/
	res.redirect('/');
});

app.listen(3000, 'localhost', () => console.log('The server has started.'));