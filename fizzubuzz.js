
// these are two ways of doing fizzbuzz.
for (i = 1; i < 101; i++) {
    var fizzbuzz ='';
    if (i % 3 === 0){ fizzbuzz = 'fizz';} 
    if (i % 5 === 0){ fizzbuzz = fizzbuzz + 'buzz';}
    if (fizzbuzz === ''){ fizzbuzz = i;}
    console.log(fizzbuzz)
}

for (i = 1; i < 101; i++) {
    var nextFizzBuzz;
    if (i % 5 === 0 && i % 3 === 0) {
        nextFizzBuzz = 'nextFizzBuzz';
    } else {
    if (i % 3 === 0) nextFizzBuzz = 'nextFizz';
    else if (i % 5 === 0) nextFizzBuzz = 'nextBuzz';
    else  nextFizzBuzz = i;
    }
    console.log(nextFizzBuzz)
}