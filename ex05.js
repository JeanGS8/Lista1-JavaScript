const prompt = require('prompt-sync')();
		
const nota1 = Number(prompt('Enter the 1st test grade: '));
const nota2 = Number(prompt('Enter the 2nd test grade: '));
const nota3 = Number(prompt('Enter the 3rd test grade: '));

const media = ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10;

console.log(`The weighted average is: ${media}`);