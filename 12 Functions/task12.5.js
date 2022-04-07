//Напишите функцию digitN(k,n), которая возвращает n-ую цифру целого положительного числа k 
//(цифры в числе нумеруются справа налево).
//Если количество цифр в числе k меньше n, то функция возвращает -1

function digitN(k,n) {
    if (Number.isInteger(k) > 0) {
        if (k < n)
            return -1;
        else {
            const str = String (k)
            const num = str.split('').reverse()
            console.log(num[n-1])

        }
    }
    else console.log('Введите целое положительное число')
}

digitN(234513, 3)