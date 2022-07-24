'use strict';

const ni = Number(prompt('Введите начало диапазона'));
const mi = Number(prompt('Введите окончание диапозона'));


const getLeapYear = (ni, mi) => {
    let years = [];
    for(let i = 0; i <= mi - ni; i++) {
        years.push(i + ni)  
    }
    let leapYears = years.filter(item => item % 4 === 0 && (item % 100 !== 0 || item % 400 === 0));
    console.log(years);
    console.log(leapYears);
    return leapYears;
};


getLeapYear(ni, mi)
