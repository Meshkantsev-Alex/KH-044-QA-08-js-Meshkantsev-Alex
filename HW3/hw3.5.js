//Write the program which take name of color from user (red, blue, green, yellow, orange, black, white, pink)
// and print out length of this word. Use switch

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter string ', (answer) => {
    switch(answer) {
        case 'red':
            outputToConsole ()
            break;
        case 'blue':
            outputToConsole ()
            break;
        case 'green':
            outputToConsole ()
            break;
        case 'yellow':
            outputToConsole ()
            break;
        case 'orange':
            outputToConsole ()
            break;
        case 'black':
            outputToConsole ()
            break;
        case 'white':
            outputToConsole ()
            break;
        case 'pink':
            outputToConsole ()
            break;
        default:
            console.log(`You enter not correct word`)
            break
    
    }

    function outputToConsole () {
        console.log (`You enter ${answer} color, lenght of this word ${answer.length}`);
    }
    rl.close();
});