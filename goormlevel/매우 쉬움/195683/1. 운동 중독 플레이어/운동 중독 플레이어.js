const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
rl.on('line', (line) => {
	input = line.split(' ');
	rl.close();
});

rl.on('close', () => {
	const [weight, repeat] = input;
	const result = weight * (1 + repeat / 30);
	console.log(parseInt(result));
})