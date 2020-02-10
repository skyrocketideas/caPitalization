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

// const fullName = "Dave Bloody Brubeck";
// const firstSpace = fullName.indexOf(" ");
// const secondSpace = fullName.indexOf(" ", firstSpace + 1);
// const firstName = fullName.substring(0, firstSpace);
// const middleName = fullName.substring(firstSpace + 1, secondSpace);
// const lastName = fullName.substring(secondSpace + 1);
