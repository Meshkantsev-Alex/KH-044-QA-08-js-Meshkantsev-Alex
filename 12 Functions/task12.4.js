// Напишите функцию calc(a,b,op)б которая выполняет над числами a и b одну из арифметических операций
// и возвращает ее результат.
// Вид операции определяется целым числом op: 1 - вычитание, 2 - умножение, 3 - деление, остальные значения сложение

function calc(a,b,op) {
    let res;
    switch (op) {
        case 1:res = a-b;
        break;
        case 2:res = a*b;
        break;
        case 3:res = a/b;
        break;
        default: res = a+b;
        
    }
    return res;
}


console.log(calc(3,3,3))