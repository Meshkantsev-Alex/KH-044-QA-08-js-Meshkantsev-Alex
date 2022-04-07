//Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел 
//целочисленного массива.

const pow2=[1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

let evenNumber = pow2.filter(num => num % 2 === 0).reduce((sum, num)=> {sum +=Math.sqrt(num); return sum}, 0)
console.log(evenNumber)