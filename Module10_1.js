/*Задание 1.
Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.*/

let value = prompt("Введите число", '');
let result = +value;

if ((typeof result == 'number') && (result == result))
{
    if (result%2 == 0)
    {
        console.log("Введеное число чётное")
    }
    else
    {
        console.log("Введеное число нечётное")
    }
}
else
{
    console.log("Упс! Кажется, вы ошиблись")
}

