/*// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

//ES6
//Const is the constant value and let is the Var

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';

console.log(name6);
*/
//ES5

function driversLicence(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }        
        console.log(firstName + ', born in ' + yearOfBirth + ' is now officialyy alowed to drive a car.');
}


driversLicence(true);

//ES6

function driversLicence6(passedTest) {
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    if (passedTest) {
        firstName = 'John';   
    }
        console.log(firstName + ', born in ' + yearOfBirth + ' is now officialyy alowed to drive a car.');
}


driversLicence6(true);










// Block Scoping Example

let i = 23;

for(let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);



////////////////////////////////////
// Lecture: Blocks and IIFs

{
    const a = 1;
    let b = 2;
    //var c =3;
}

//console.log(a + b);
//console.log(c);



//ES5

(function() {
    var c = 3;
})();

//console.log(c);



//////////////////////////////
// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is '+ calcAge(yearOfBirth) + ' years old.');

// ES6

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;

//ES6 String functions
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes(' '));
console.log(firstName.repeat(5));
console.log(`${lastName}`.repeat(5));




///////////////////////////////////
// Lecture: Arrow Functions

const years = [1990, 1965, 1982, 1937];

// ES5
var 

