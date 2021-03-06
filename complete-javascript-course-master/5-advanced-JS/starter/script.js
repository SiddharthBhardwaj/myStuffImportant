/***********************
 * Function Constructor
 */

//  var john = {
//      name: 'john',
//      yearOfBirth: 1990,
//      job: 'teacher'
//  };

//  var Person = function(name, yearOfBirth, job) {
//      this.name = name;
//      this.yearOfBirth = yearOfBirth;
//      this.job = job;
//  }

//  Person.prototype.calculateAge = function() {
//     console.log(2018 - this.yearOfBirth);
//  }

//  Person.prototype.lastName = 'Smith';

//  var siddharth = new Person('Siddharth', 1994, 'Associate Consultant');
//  var jane = new Person('Jane', 1969, 'designer');
//  var mark = new Person('Mark', 1948, 'retired');

//  siddharth.calculateAge();
//  jane.calculateAge();
//  mark.calculateAge();

//  console.log(siddharth.lastName);
//  console.log(jane.lastName);
//  console.log(mark.lastName);


/*********************************
 * Object.create
 */
/*
 var personProto = {
     calculateAge: function() {
         console.log(2018 - this.yearOfBirth);
     }
 };

 var john = Object.create(personProto);
 john.name = 'John';
 john.yearOfBirth = 1990;
 john.job = 'teacher';

 var jane = Object.create(personProto, {
     name: {value : 'Jane'},
     yearOfBirth: {value: 1969},
     job: { value: 'designer'}
 })

 */


 /*******************************
  * Primitives vs objects
  */

/*
  //primitives create a copy whereas object creates a reference

  //primitives
  var a = 23;
  var b = a;
  a = 46;

  console.log(a);
  console.log(b);

 //Objects
  var obj1 = {
      name: 'John',
      age: 26
  }

  var obj2 = obj1;
  
  obj1.age = 30;

  console.log(obj1.age);
  console.log(obj2.age);

  //Functions
  var age = 24;
  var obj = {
      name: 'Siddharth',
      city: 'Bangalore'
  };

  function change(a, b) {
      a = 30;
      b.city = 'San Francisco';
  }

  change(age, obj);

  console.log(age);
  console.log(obj.city);
*/


/*************************
 * Passing Functions as arguements
 */
/*
 var years = [1990, 1965, 1937, 2005, 1998];

 function arrayCalc(arr, fn) {
     var arrRes = [];
     for(var i = 0; i < arr.length; i++ ) {
         arrRes.push(fn(arr[i]));
     }
     return arrRes;
 };

 function calculateAge(el) {
     return 2018 - el;
 };

 function isFullAge(el) {
     return el >= 18;
 };


 function maxHeartRate(el) {
    if(el>=18 && el<=81) {
     return Math.reound( 206.9 - (0.67 * el));
    } else {
        return -1;
    }

 };

 var arrayResult = arrayCalc(years, calculateAge);
 var fullAges = arrayCalc(arrayResult, isFullAge);
 var rates = arrayCalc(fullAges, maxHeartRate);
 console.log(arrayResult);
 console.log(fullAges);
 console.log(rates);
 */

 /****************************
  * Functions returning Functions
  */
 /*
  function interviewQuestion(job) {
      if(job === 'designer') {
          return function(name) {
              console.log(name + ', can you please explain what UX design is?');
          }
      } else if (job === 'teacher') {
          return function(name) {
              console.log('What subject do you teach, ' + name + '?');
          }
      } else {
          return function(name) {
              console.log('Hello ' + name + ' , what do you do?');
          }
      }
  }

  var teacherQuestion = interviewQuestion('teacher');
  var designerQuestion = interviewQuestion('designer');
  teacherQuestion('John');
  designerQuestion('John');
  designerQuestion('Jane');
  designerQuestion('Mark');
  designerQuestion('Mike');
  interviewQuestion('teacher')('Mark');
  */

  /********************************
   * IIFE(Immediately Invoked Function Expressions)
   */
  /*
   (function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
   })();

   //console.log(score);

   (function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
   })(5);
   */

   /*******************************
    * Closures
    */
    function retirement(retirnementAge) {
        var a = ' years left for retirement.'
        return function(yearOfBirth) {
            var age = 2018 - yearOfBirth;
            console.log((retirnementAge - age) + a);
        }
    }

    var retirementUS = retirement(66);
    var retirementGermany = retirement(65);
    var retirementIceland = retirement(67);

    retirementUS(1990);
    retirementGermany(1990);
    retirementIceland(1990);

    /*
     function interviewQuestion(job) {
      if(job === 'designer') {
          return function(name) {
              console.log(name + ', can you please explain what UX design is?');
          }
      } else if (job === 'teacher') {
          return function(name) {
              console.log('What subject do you teach, ' + name + '?');
          }
      } else {
          return function(name) {
              console.log('Hello ' + name + ' , what do you do?');
          }
      }
  }
  */
  /*
  function profession(job) {
      return function(name) {
        if(job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + '?');
        } else {
                console.log('Hello ' + name + ' , what do you do?');
        }
      }
  }

  var teacher = profession('teacher');
  teacher('Neeru');
  */

/********************************************
 * bind, call and apply
 */

 var john = {
     name: 'John',
     age: 26,
     job: 'teacher',
     presentation: function(style, timeOfDay) {
         if(style === 'formal') {
             console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
         } else if(style === 'friendly') {
             console.log('Hey! What\'s up? I\'m' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
         }
     }
 }


 var emily = {
     name: 'Emily',
     age: 35,
     job: 'designer'
 }


 john.presentation('formal', 'morning');

 john.presentation.call(emily, 'friendly', 'afternoon');
 
 //john.presentation.apply(emily, ['friendly', 'afternoon']);

 var johnFriendly = john.presentation.bind(john, 'friendly');

 johnFriendly('morning');
 johnFriendly('night');
 var emilyInformal = john.presentation.bind(emily, 'formal');
 emilyInformal('afternoon');


 var years = [1990, 1965, 1937, 2005, 1998];

 function arrayCalc(arr, fn) {
     var arrRes = [];
     for(var i = 0; i < arr.length; i++ ) {
         arrRes.push(fn(arr[i]));
     }
     return arrRes;
 };

 function calculateAge(el) {
    return 2018 - el;
};

function isFullAge(limit, el) {
    return el >= limit;
};

var ages = arrayCalc(years, calculateAge);

console.log(ages);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);

    