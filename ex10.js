const prompt = require('prompt-sync')();

const factory = Number(prompt('Enter factory cost: '));

const distributor=28, tax=45;
const cost = factory + (distributor + tax);

console.log(`\nThe cost to the consumer is: ${cost}.`)