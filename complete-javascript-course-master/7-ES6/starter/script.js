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

// function driversLicence(passedTest) {
//     if (passedTest) {
//         console.log(firstName);
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }        
//         console.log(firstName + ', born in ' + yearOfBirth + ' is now officialyy alowed to drive a car.');
// }


// driversLicence(true);

// //ES6

// function driversLicence6(passedTest) {
//     //console.log(firstName);
//     let firstName;
//     const yearOfBirth = 1990;
//     if (passedTest) {
//         firstName = 'John';   
//     }
//         console.log(firstName + ', born in ' + yearOfBirth + ' is now officialyy alowed to drive a car.');
// }


// driversLicence6(true);










// // Block Scoping Example

// let i = 23;

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);



// ////////////////////////////////////
// // Lecture: Blocks and IIFs

// {
//     const a = 1;
//     let b = 2;
//     //var c =3;
// }

// //console.log(a + b);
// //console.log(c);



// //ES5

// (function() {
//     var c = 3;
// })();

// //console.log(c);



// //////////////////////////////
// // Lecture: Strings

// // let firstName = 'John';
// // let lastName = 'Smith';
// // const yearOfBirth = 1990;

// // function calcAge(year) {
// //     return 2016 - year;
// // }

// // ES5

// // console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is '+ calcAge(yearOfBirth) + ' years old.');

// // // ES6

// // console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

// // const n = `${firstName} ${lastName}`;

// // //ES6 String functions
// // console.log(n.startsWith('J'));
// // console.log(n.endsWith('h'));
// // console.log(n.includes(' '));
// // console.log(firstName.repeat(5));
// // console.log(`${lastName}`.repeat(5));




// ///////////////////////////////////
// // Lecture: Arrow Functions

// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(el) {
//     return 2016 - el;
// });
// console.log(ages5);

// // ES6
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);

// ages6 = years.map((el,index) => `Age element ${index +1}: ${2016 - el}.`);

// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });
// console.log(ages6);


// ///////////////////////////////////////
// // Lecture: Arrow Functions 2

// //ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         })
//     }
// }

// box5.clickMe();



// //ES6
// var box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         //var self = this;
//         document.querySelector('.green').addEventListener('click', () => {
//             const str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         })
//     }
// }

// box6.clickMe();
// //ES6
// // var box66 = {
// //     color: 'green',
// //     position: 1,
// //     clickMe: () => {
// //         //var self = this;
// //         document.querySelector('.green').addEventListener('click', () => {
// //             const str = 'This is box number ' + this.position + ' and it is ' + this.color;
// //             alert(str);
// //         })
// //     }
// // }

// // box66.clickMe();


// function Person(name) {
//     this.name = name;
// }

// //ES5
// Person.prototype.myFriends5 = function(friends) {
//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);



// //ES6
// Person.prototype.myFriends5 = function(friends) {
//     var arr = friends.map(el => `${this.name} is friends with + ${this.el}`);
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);
// new Person('Mike').myFriends5(friends);




// ////////////////////////////////////////
// //// Lecture: Destructuring

// // ES5
// var john = ['John', 26];
// //var name = john[0];
// //var age = john[1];


// // ES6
// const [name, age] = ['John', 26];

// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// const {firstName, lastName} = obj;

// console.log(firstName);
// console.log(lastName);

// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);
// function calcAgeRetirment(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }
// const [age2, retirement] = calcAgeRetirment(1990);
// console.log(age2);
// console.log(retirement);

///////////////////////////////////////////
// Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(el) {
    el.style.backgroundColor = 'dodgerblue';
});


//ES6

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(element => {
    element.style.backgroundColor = 'dodgerblue'
});

// ES5
/*
for(var i = 0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I chenged to blue!';
}
*/

// ES6
/*
for (const cur of boxesArr6) {
    if(cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I chenged to blue!';

}



//ES5

var ages = [12,17,8,21,14,11];

var full = ages.map(function(cur){
    return cur >=18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6

console.log(ages.findIndex(cur => {
    cur >=18;
}));
console.log(ages.find(cur => cur >= 18));
*/

////////////////////////////////////////////
/// Lecture: Spread Operator
/*
function addFourAges (a,b,c,d) {
    return a+b+c+d;
}

var sum1 = addFourAges(18,30,12,21);

console.log(sum1);

//ES5
var ages = [18,30,12,21];

var sum2 = addFourAges.apply(null, ages);

console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Marry', 'Bob', 'Ann'];
const bigFamily = [...familySmith,...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => {
    cur.style.color = 'purple'
});
*/


////////////////////////////////////////////
// Lecture: REST Parameters

/*
//ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArray = Array.prototype.slice.call(arguments);
    argsArray.forEach(function(cur) {
        console.log((2018-cur) >= 18);
    });
}

isFullAge5(1990,1995,1965);

//ES6

function isFullAge6(...years) {
    //console.log(years);

    years.forEach(cur => {
        console.log((2016 - cur) >= 18);
    })

};

isFullAge6(1990,1999,1965);
*/
/*
//ES5
function isFullAge5(limit) {
    console.log(arguments);
    var argsArray = Array.prototype.slice.call(arguments, 1);
    console.log(argsArray);
    argsArray.forEach(function(cur) {
        console.log((2018-cur) >= limit);
    });
}

isFullAge5(21,1990,1995,1965);

//ES6

function isFullAge6(limit, ...years) {
    //console.log(years);

    years.forEach(cur => {
        console.log((2016 - cur) >= 18);
    })

};

isFullAge6(21,1990,1999,1965);
*/


//////////////////////////////////////////////////
/// Lecture: Default Parameters

/*
//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith': lastName = lastName;
    nationality === undefined ? nationality = 'American': nationality = nationality;
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('emily', 1985, 'Diaz', 'Spanish');

console.log(john);
console.log(emily);
*/

//ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('emily', 1985, 'Diaz', 'Spanish');
console.log(john);
console.log(emily);
*/



/////////////////////////////////////////////////////
// Lecture: MAPS

//Map is a new key value structure in ES6 
/*
const quest = new Map();

quest.set('Question','What is the Official name of the latest major Javascript version?');
quest.set(1, 'ES5');
quest.set(2, 'ES6');
quest.set(3, 'ES2015');
quest.set(4, 'ES7');
quest.set('correct', 3);
quest.set(true, 'Correct Answer :D');
quest.set(false, 'Wrong, Please Try Again!');


console.log(quest.get('Question'));
/*
/*
console.log(quest.size);
if(quest.has(4)) {
    //quest.delete(4);
    console.log('Answer 4 is here')
}
*/
//quest.clear();

//We can loop over MAP
// Method 1 : forEach
/*
quest.forEach((value, key) => {
    console.log(`This is ${key}, and it's set to ${value}`);
})
*/
//Method 2 : for Of loop
/*
for(let [key,value] of quest.entries()) {

    if(typeof(key) === 'number')
    console.log(`Answer ${key}: ${value}`);
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(quest.get(ans === quest.get('correct')));
*/
/*
Reason why maps are better:-
1. We can use anything as keys
2. Maps are iterable and they make it very easy to manipulate through it.
3. We can easily add and remove data from it.
*/


////////////////////////////////////////////////
// Lecture: Classes

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('john', 1990, 'teacher');
john5.calculateAge();



// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age); 
    }

    static gretting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'Teacher');

Person6.gretting();

//Class Definition is not Hoisted.
// We can only add method to classes but not properties.


//Static methods which are simply attached to the class but not inherited by class instances
















