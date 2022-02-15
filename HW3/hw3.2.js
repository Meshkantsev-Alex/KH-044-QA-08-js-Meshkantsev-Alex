//Write a program which take string from console and print out whether it contains numbers,
// uppercase symbols, lowercase symbols, special characters (!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Enter string ', (answer) => {
    let arrayString = answer.split('');
    let numbers = [];
    let upperCaseSymbols = [];
    let lowerCaseSymbols = [];
    let specialCharacters = [];

    for (let i of arrayString) {
        if (i.charCodeAt() >= 48 && i.charCodeAt() <= 57) {
            numbers.push(i); 
        }

        else if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
            upperCaseSymbols.push(i);  
        }

        else if (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
            lowerCaseSymbols.push(i);
        }

        else {
            specialCharacters.push(i);
        }
      
    }
    
    console.log(`You enter ${numbers.length} numbers: ${numbers}`);
    console.log(`You enter ${upperCaseSymbols.length} uppercase symbol: ${upperCaseSymbols}`);
    console.log(`You enter ${lowerCaseSymbols.length} lowercase symbols: ${lowerCaseSymbols}`);
    console.log(`You enter ${specialCharacters.length} special characters: ${specialCharacters}`);

    rl.close();
});