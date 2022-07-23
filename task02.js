'use strict';

let array = [];
const count = Number(prompt('Введите кол-во элементов массива'));
const n = Number(prompt('Введите начало диапазона'));
const m = Number(prompt('Введите окончание диапозона'));



const randomArray = (count, n, m) => {
	for (let i = 0; i < count; i++) {
		array.push(Math.round(Math.random() * (m - n + 1) + n));
	}
	console.log(array)
	return array;
}


randomArray(count, n, m)

