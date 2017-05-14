const readline = require('readline');

var realPerson = {
    name: '',
    sayings: []
};
var rL = readline.createInterface(process.stdin, process.stdout);

rL.question('What\'s the name of your favorite tzadik?\n', answer => {
    realPerson.name = answer;
    rL.setPrompt(`What would ${realPerson.name} say?\n`);
    rL.prompt();
 
});

