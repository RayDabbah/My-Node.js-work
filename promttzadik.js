const readline = require('readline');


var rL = readline.createInterface(process.stdin, process.stdout);
endMessage = () => process.stdout.write('What do we need to use readline for?\n');
rL.question('What\'s the name of your favorite tzadik?\n', answer => {
    console.log(answer);
  process.exit();
});

process.on('exit', endMessage);