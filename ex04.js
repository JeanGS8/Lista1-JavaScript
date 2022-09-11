const prompt = require('prompt-sync')();

const numA = Number(prompt('enter number A: '));
const numB = Number(prompt('enter number B: '));
const numC = Number(prompt('enter number C: '));

const numR = Math.pow((numA + numB), 2);
const numS = Math.pow((numB + numC), 2);

const numD = (numR + numS) / 2;

console.log(`\nanswer: ${numD}`);