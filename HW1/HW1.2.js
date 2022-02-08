//Write a program which count the volume of cylinder and print result. Radius and height user input.

const readline = require('readline');

let radius = process.argv[2];
let height = process.argv[3];



function volume( radius,  height)
{
    let volume = Math.PI * Math.pow(radius, 2) * height;
    console.log("Volume of Cylinder = " + volume.toFixed(3));
}

volume( radius,  height);


