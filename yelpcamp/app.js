var express = require("express");
var app = express();

app.set("view engine", "ejs");
var campgrounds = [
    {name: 'Roaring Rivers' , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbUWZXpp1e0TpHykfTuBNPJW6xKbNhzF4DO14Kk5sUWkKtQQPAA"},
    {name: 'Scenic Byway' , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnLuRq6C4KcTG1qok7DRvo2dI4Gok9Cg4mkdrSjchHeNByIYCxw"},
    {name: 'Valley Creek' , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PvCEpVLnfwjAaHyLizRH93ds4hrF3ycEDuXAs3XlrF7JovPbsQ"},
    {name: 'Avalanche Creek', image: 'https://www.nps.gov/glac/planyourvisit/images/avacg.jpg'},
    {name: 'Blue Rocks Family Campground', image: 'http://bluerockscampground.com/images/rates/Tent-Camping-Blue-Rocks.jpg'},
    {name: 'Hemlock Campgrounds', image: 'http://www.pacamping.com/img/HFltDu/900w/90/Camp_Hemlock_1_285.jpg'},
    {name: 'Delaware Water Gap KOA', image: 'http://www.pacamping.com/img/wyvTHK/900w/90/tent.jpg'}
];
app.get("/", (req, res) => {
    res.render("landing");
});
app.get("/campgrounds", (req, res) => {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, "localhost", ()=> console.log('The server has started.'));
