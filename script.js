// Lecture: let and const
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
let name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

// ES5
/*
function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1998;

        console.log(firstName + ', born in ' + yearOfBirth + ', is nom officially allowed to drive a car.');
    }
}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {
    
    let firstName = 'John';
    const yearOfBirth = 1998;

    if (passedTest) {
        console.log(firstName + ', born in ' + yearOfBirth + ', is nom officially allowed to drive a car.');
    }

    
}

driversLicence6(true);

let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/
/*
{
    const a = 1;
    let b = 2;
}

console.log(a + b);
*/

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2018 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('hnd'));
console.log(`${firstName} `.repeat(5));