'use strict';

let array = [];
const count = Number(prompt('Введите кол-во элементов массива'));
const n = Number(prompt('Введите начало диапазона'));
const m = Number(prompt('Введите окончание диапозона'));
const line = prompt('Введите нужное слово');


const randomArray = (count, n, m, line) => {
    let evenArray = [];
	for (let i = 0; i < count; i++) {
		array.push(Math.round(Math.random() * (m - n) + n));
	}
    console.log(array);

    if (line === 'even') { 
        let evenArray = array.map((num) => !(num%2 === 0)? num + 1 : num);
        console.log(evenArray);
        return evenArray;
    } 
    else if (line === 'odd') {
        let evenArray = array.map((num) => (num%2 === 0)? num + 1 : num);
        console.log(evenArray);
        return evenArray;
    } else {
        console.log(array)
	    return array;
    }

	
}


randomArray(count, n, m, line)

