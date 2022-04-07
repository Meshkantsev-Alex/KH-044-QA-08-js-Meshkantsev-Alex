//Напишите функцию pow(x,n), которая возвращает х в степени n. Иначе говоря, умножает x на себя n раз 
//и возвращает результат

function pow(x,n) {
    if (n < 0) 
        console.log('Значение n должно быть больше 0')
    else
        {let res = 1;
        for (let i=0; i < n; i++) {
        res *= x
        }
        return res
    }
}

console.log (pow(2, 3))