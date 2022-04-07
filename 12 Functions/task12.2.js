// Напишите функцию minMax(x,y), которая возвращает минимальное из x и y

function minMax(x,y) {
    if (x > y) 
        return y;
    else if (x < y) 
        return x;
    else console.log('Значениея x и y равны');
}

console.log(minMax(5,5))