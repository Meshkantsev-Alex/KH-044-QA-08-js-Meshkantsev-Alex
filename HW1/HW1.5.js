//Write a program which count x1, x2 for quadratic equation. Input a, b, c from console.

const readline = require('readline');

let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];

function roots(a, b, c)
{

    if (a == 0) {
        console.log("Invalid");
        return;
    }

    let disc = Math.pow(b, 2) - 4 * a * c;
    let sqrtOfDisc = Math.sqrt(Math.abs(disc));

    if (disc > 0) {
        let x1 = (-b + sqrtOfDisc) / (2 * a);
        let x2 = (-b - sqrtOfDisc) / (2 * a);
        console.log('x1 = ' + x1.toFixed(3) + ", x2 = " + x2.toFixed(3));
    }
    else if (disc == 0) {
        let x = -b / (2 * a);
        console.log('x = ' + x.toFixed(3)) ;
    }
    else 
    {
        console.log('The equation does not have any roots');
    }
}

roots(a, b, c);