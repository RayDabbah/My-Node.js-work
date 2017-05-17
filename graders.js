//This is my מהלך.
var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 54,34, 31, 99, 34];

function scoreAverage(marks) {
    var averageStart = marks.reduce((a, b) => (a + b));
    var averageFinal = Math.round(averageStart/marks.length);
    return averageFinal;
}

console.log(scoreAverage(scores));
console.log(scoreAverage(scores2));

//This is Colt Steel's מהלך.
function average(scores){
    //add all scores together
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    //divide by total number of scores
    var avg = total/scores.length;
    
    //round average
    return Math.round(avg);
}

console.log("Average score for environment science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

console.log("Average score for organic chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68