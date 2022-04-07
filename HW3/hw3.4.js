//Write a program which take number of month from user and print out name of season (summer, winter ...)

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter number ', (answer) => {
    if (answer == 1 || answer == 2 || answer == 12) {
        console.log (`It's Winter`)
    }
    else if (answer == 3 || answer == 4 || answer == 5) {
        console.log (`It's Spring`)
    }
    else if (answer == 6 || answer == 7 || answer == 8) {
        console.log (`It's Summer`)
    }
    else if (answer == 9 || answer == 10 || answer == 11) {
        console.log (`It's Authem`)
    }
    else {
        console.log (`Enter correct number`);
    }
    
    
    rl.close();
});