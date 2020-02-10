"use strict";

const firstName = "Graeme";

const nameLowerCase = firstName.toLowerCase();
const firstPart = nameLowerCase.substring(0, 2);
const thirdLetter = nameLowerCase.toUpperCase().substring(3, 2);
const endPart = nameLowerCase.substring(3);
const newFirstName = firstPart + thirdLetter + endPart;

document.querySelector("h2").textContent = newFirstName;

console.log(`Your name is : ${firstPart}${thirdLetter}${endPart}`);
