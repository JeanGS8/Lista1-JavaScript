const prompt = require('prompt-sync')();

const day = Number(prompt('How many days old do you have? '));
const month = Number(prompt('How many months old do you have? '));
const year = Number(prompt('How many years old do you have?'));

const days = (year*365) + (month*30) + day;

console.log(`\nYou have ${days} days to live`);