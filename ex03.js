const prompt = require('prompt-sync')();

const time = Number(prompt('Enter the event duration time in seconds: '));

const hours = (time / 3600).toFixed(0);
const minutes = ((time % 3600) / 60).toFixed(0);
const seconds = ((time % 3600) % 60).toFixed(0);

console.log(`the event lasted: ${hours} hours, ${minutes} minutes and ${seconds} seconds.`);