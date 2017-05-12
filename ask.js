var questions = [
'What is your name?',
'What is your favorite food?',
'Which mesechta are you learning?'
];
var answers = [];

function ask(i) {
	process.stdout.write(`\n\n\n\n ${questions[i]}`);
	process.stdout.write(`  >  `);
}

process.stdin.on('data', function(data) {
answers.push(data.toString().trim());
if (answers.length < questions.length) {
  ask(answers.length);
} else {
	process.exit();
}
});
endMessage = () => process.stdout.write(`\n\n\n\n\ Go eat ${answers[1]} ${answers[0]}, you can do ${answers[2]} later! \n\n Have fun!!! \n\n`);


process.on('exit', endMessage);
ask(0);