'use strict';

let array = [];
let m = 100;
const count = Number(prompt('Введите кол-во элементов массива'));


const randomArray = count => {
	for (let i = 0; i < count; i++) {
		array.push(Math.round(Math.random() * m + 1));
	}
	console.log(array)
	return array;
}


randomArray(count)
