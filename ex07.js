const prompt = require('prompt-sync')();

const x1 = Number(prompt('type X1: '));
const x2 = Number(prompt('type X2: '));
const y1 = Number(prompt('type Y1: '));
const y2 = Number(prompt('type Y2: '));

const x2x1 = Math.pow((x2 - x1), 2);
const y2y1 = Math.pow((y2 - y1), 2);

const d = Math.sqrt(x2x1 + y2y1);

console.log(`The correct answer is: ${d.toFixed(2)}`);