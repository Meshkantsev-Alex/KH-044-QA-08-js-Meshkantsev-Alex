//Write a program which converts number from hex to decimal view (input in command line)

const readline = require('readline');

let n = `${process.argv[2]}`;

function HexToDec(n)
    {
        return parseInt(n, 16);
    }
     
console.log(HexToDec(n));