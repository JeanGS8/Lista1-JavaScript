const prompt = require('prompt-sync')();

const days = Number(prompt('Enter how many days to live you have: '));

const year = (days / 365).toFixed(0);
const month = ((days % 365) / 30).toFixed(0);
const day = ((days % 365) % 30).toFixed(0);

console.log(`You are ${day} days, ${month} months and ${year} years old`);