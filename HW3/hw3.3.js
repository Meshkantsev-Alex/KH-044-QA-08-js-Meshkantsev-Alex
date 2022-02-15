//Write a program that takes a year from user and print whether that year is a leap year or not.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter year: ', (answer) => {
    if ( answer % 4 === 0 || (answer % 100 !== 0 && answer % 400 === 0)) {
        console.log(`${answer} is a leap year`)
    }

    else {
        console.log(`${answer} is a not leap year`)
    }
        
    rl.close();
});