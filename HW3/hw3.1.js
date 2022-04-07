//Write a program which take four numbers from the user and print out just that few of them 
//which divide by 3 or 5 without remainder

//let numbers =[1, 3, 5, 9, 11, 13, 15];

const readline = require('readline');
let num1 = +process.argv[2];
let num2 = +process.argv[3];
let num3 = +process.argv[4];
let num4 = +process.argv[5];


let numbers= [num1, num2, num3, num4] 

let array = [];
for (let num of numbers) {
    if (num % 3 === 0 || num % 5 === 0){
        array.push(num)
    }
}
console.log(array);


