var x = new Array(new Array(20, 34, 2), new Array(9, 12, 18), new Array(3, 4, 5));

//задаём значение минимального эдемента по умолчанию первого элемента в первом массиве второго уровня
var minValue = x[0][0];

//перебираем массивы второго уровня
for (var i = 0; i < x.length; i++){
    //перебираем элементы массивов второго уровня
    for (var j = 0; j < x[i].length; j++){
        //сравниваем элементы массива второго уровня со значением заданным по умолчанию, и перезаписываем его, если элемент меньше
        if(minValue > x[i][j]) {
            minValue = x[i][j];
        }
    }
}

console.log("Минимальное значение: " + minValue);