// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let length;
	for await (const line of rl) {
		length = line;
		rl.close();
	}
	
	const numbers = Array.from({ length: length },(_, row)=> { return Array.from({ length: length }, (_, column) => (row * length) + (column + 1)) });
	
	numbers.map(row => console.log(row.join(' ')));
	
	process.exit();
})();
