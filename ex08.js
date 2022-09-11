const prompt = require('prompt-sync')();

const numA = Number(prompt('Enter the value of \"A\": '));
const numB = Number(prompt('Enter the value of \"B\": '));
const numC = Number(prompt('Enter the value of \"C\": '));
const numD = Number(prompt('Enter the value of \"D\": '));
const numE = Number(prompt('Enter the value of \"E\": '));
const numF = Number(prompt('Enter the value of \"F\": '));

const numX = ((numC * numE) - (numB * numF)) / ((numA * numE) - (numB * numD));
const numY = ((numA * numF) - (numC * numD)) / ((numA * numE) - (numB * numD));

console.log(`\nX value: ${numX}`);
console.log(`Y value: ${numY}`);