"use strict";

const firstName = "Alexander";

const nameLowerCase = firstName.toLowerCase();
const firstPart = nameLowerCase.substring(0, 2);
const thirdLetter = nameLowerCase.toUpperCase().substring(3, 2);
const endPart = nameLowerCase.substring(3);

console.log(nameLowerCase);
console.log(firstPart);
console.log(thirdLetter);
console.log(endPart);

console.log(`Your name is : ${firstPart}${thirdLetter}${endPart}`);
