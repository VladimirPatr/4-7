'use strict';

let arr = [];
const counter = Number(prompt('Введите кол-во элементов массива'));
const n = Number(prompt('Введите начало диапазона'));
const max = Number(prompt('Введите окончание диапозона'));



const randomArra = (counter, n, max) => {
	for (let i = 0; i < counter; i++) {
		arr.push(Math.round(Math.random() * (max - n + 1) + n));
	}
	console.log(arr)
	return arr;
}


randomArra(counter, n, max)

