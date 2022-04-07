// Напишите фунцию sing(x) целого типа, возвращающую для вещественного числа x следующие значения:
// -1, если x < 0
//  0, если x = 0
//  1, если x > 0

function sing(x) {
    if (x < 0) 
        return -1;
    else if (x > 0) 
        return 1;
    else 
        return 0;
}

console.log(sing(Math.sqrt(2)))