// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let count;
	for await (const line of rl) {
		count = line;
		rl.close();
	}
	
	for(let i = 0; i < count; i+=1){
		console.log('*'.repeat(i + 1));
	}
	
	process.exit();
})();
