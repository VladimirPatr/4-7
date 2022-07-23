'use strict';

let arra = [];
const coun = Number(prompt('Введите кол-во элементов массива'));
const nach = Number(prompt('Введите начало диапазона'));
const maxima = Number(prompt('Введите окончание диапозона'));
const line = prompt('Введите нужное слово');


const randomArr = (coun, nach, maxima, line) => {
    let evenArray = [];
	for (let i = 0; i < coun; i++) {
		arra.push(Math.round(Math.random() * (maxima - nach) + nach));
	}

    if (line === 'even') { 
        let evenArray = arra.map((num) => !(num%2 === 0)? num + 1 : num);
        console.log(evenArray);
        return evenArray;
    } 
    else if (line === 'odd') {
        let evenArray = arra.map((num) => (num%2 === 0)? num + 1 : num);
        console.log(evenArray);
        return evenArray;
    } else {
        console.log(arra)
	    return arra;
    }

	
}


randomArr(coun, nach, maxima, line)

