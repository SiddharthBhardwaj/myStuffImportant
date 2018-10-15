/**********************************
*    Multi Line Comment examples
*    Variables and Datatypes
*/


// console.log("Hello External Sid!!!!");


// var firstName = 'Siddharth';
// console.log(firstName);

// var lastName = 'Bhardwaj';
// var age = 23;
// var fullAge = true;

// console.log(fullAge);


// var job;
// console.log(job);


// job='Associate Consultant';
// console.log(job);




/*********************************
 * Variable Mutation and type coecion
 */
/*
 var firstName = 'Siddharth'
 var age = 23;

//Type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;

 job='Associate Consultant';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. is he Married? ' + isMarried);

 //Variable Mutation
age = 'twenty three';
job = 'karate player';

alert(firstName + ' is a ' + age + ' year old ' + job + '. is he Married? ' + isMarried);

var lastName = prompt('What is his Last Name?');

console.log(firstName + ' ' + lastName);

*/

/***********************************
 * Basic Operations
 */

 /*
 var year,yearSid,yearMark;
 now = 2018;
 ageSid = 23;
 ageBashneet = 24;
 // Math Operators
 yearSid = now - 23;
 yeahMark = now - 24;
 
 console.log(yearSid);
 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 // Logical operators
 var sidOlder = ageSid > ageBashneet;
 console.log(sidOlder);


 //typeof operator
 console.log(typeof sidOlder);
 console.log(typeof ageSid);
 console.log(typeof 'Bashneet is older than Sid');
 var x;
 console.log(typeof x);
*/

 /****************************
  * Operator precedence
  */
 /*

  var now = 2018;
  var yearSid = 1994;
  var fullAge = 18;

  //Multiple Operators
  var isFullAge = now - yearSid >= fullAge; //true

  console.log(isFullAge);

  // Grouping
  var ageSid = now - yearSid;
  var ageBashneet = 25;
  var average = (ageSid + ageBashneet) / 2;
  console.log(average);

  // Multiple assignments

  var x, y;

  x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26

  console.log(x, y);

  // 2 + 4 + 5 = left to right
  // Assignment operator works from right to left

  // More operators

  //x = x * 2;
  x *= 2;
  console.log(x);
  x += 10;
  console.log(x);
  x++;
  console.log(x);
  x--;
  console.log(x);
  */

  /********************
   * If / else statements
   */

   /*
   var firstName = 'Siddharth';
   var civilStatus = 'Single';

   if(civilStatus === 'Married'){
       console.log(firstName + ' is Married!');
   } else {
       console.log(firstName + ' will hopefully marry soon :)');
   }

   var isMarried = true;
   if(isMarried){
        console.log(firstName + ' is Married!');
    } else {
        console.log(firstName + ' will hopefully marry soon :)');
    }
    */

    /********************
     * Boolean Logic
     */
    
    /*
     var firstName = 'Siddharth';
     var age = 23;

     if(age < 13) {
         console.log(firstName + ' is a boy.');
     } else if((age >= 13) && (age < 20)) {
         console.log(firstName + ' is a teenager.');
     } else if(age >= 20 && age < 30) {
         console.log(firstName + ' is a young man.');
     } else {
         console.log(firstName + ' is a man.');
     }
     */
    
     
    /***************************
     * The Ternary Operator and Switch Statements
     */
     /*
     var firstName = 'Siddharth';
     var age = 22;
     // Ternary operator
     age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinls juice.');

     var drink = age >=18 ? 'beer' : 'juice';

     console.log(drink);

     // Switch Statement
     var job = 'Teacher';

     switch (job) {
         case 'Teacher':
            console.log(firstName + ' teaches kids how to code.');
            break;
         case 'Driver':
            console.log(firstName + ' drives an uber in Bangalore.');
            break;
         case 'Designer':
            console.log(firstName + ' designs beautiful websites.');
            break;
         default:
            console.log(firstName = ' does something else.');
     }
     */

     /********************************
      * Truthy and Falsy values and equality operations
      */

      // falsy values: undefined, null, 0 , '', NaN
      // truthy values: NOT falsy values
/*
      var height;
      
      height = 23;

      if(height || height === 0) {
          console.log('Variable is defined');
      } else {
          console.log('Variable has NOT been defined');
      }

      // Equality operators
      if(height == '23') {
          console.log('The == operator does type coercion!');
      }
*/


      /*****************************
       * Functions
       */
      /*
       function calculateAge(birthYear) {
           //code in the function
           return 2018 - birthYear;
       }

       var ageSid = calculateAge(1994);

       console.log(ageSid);

       function yearsUntilRetirement (year, firstName) {
           var age = calculateAge(year);
           var retirment = 65 - age;
           if(retirment > 0){
            console.log(firstName + ' retires in ' + retirment + ' years');
           }else{
               console.log(firstName + ' already retired.');
           }
           
       }

       yearsUntilRetirement(1994,'Siddharth');
       yearsUntilRetirement(1948,'Bashneet');
    */

    /*******************************
     * Function Statements and Expressions
     */
    // Function Declaration
    // function whatDoYouDo(job, firstName) {}
    /*
    // Function Expression
     var whatDoYouDo = function(job, firstName){
        switch(job){
            case 'teacher':
                return firstName + ' teaches kids how to code';
            case 'driver':
                return firstName + ' drives cab in Bangalore';
            case 'designer':
                return firstName + ' designs awesome websites';
            default:
                return firstName + ' does something else';
        }
     }

     console.log(whatDoYouDo('teacher', 'Sanjay'));
     console.log(whatDoYouDo('driver', 'Siddharth'));
     console.log(whatDoYouDo('designer', 'Rhythm'));
     console.log(whatDoYouDo('retired', 'Bashneet'));
     */

     /*******************************************
      * Arrays
      */
     /*
      // Initialize new Array
      var names = ['Siddharth','Bashneet','Sanjay'];
      var years = new Array(1990, 1969, 1948);

      console.log(names[2]);
      console.log(names.length);

      //Mutate Array Data
      names[1] = 'Ben';
      console.log(names);
      names[names.length]= 'Mary'; 
      console.log(names);

      //Different data types
      var siddharth = ['Siddharth', 'Bhardway', 1994, 'Associate Consultant', false];

      siddharth.push('blue');
      siddharth.unshift('Mr.');
      console.log(siddharth);

      siddharth.pop();
      siddharth.pop();
      siddharth.shift();
      console.log(siddharth);

      console.log(siddharth.indexOf(1994));

      var isDesigner = siddharth.indexOf('designer') === -1 ? 'Siddharth is NOT a designer' : 'Siddharth is a designer';
      console.log(isDesigner);
    */

    /***************************************
     * Objects and properties
     */
    /*
     // Object literal
     var siddharth = {
         firstName : 'Siddharth',
         lastName : 'Bhardwaj',
         birthYear : 1994,
         family: ['Sanjay','Seema','Rhythm'],
         job: 'Associate Consultant',
         isMarried: false
     };

     console.log(siddharth.firstName);
     console.log(siddharth['lastName']);
     var x = 'birthYear';
     console.log(siddharth[x]);

     siddharth.job = 'designer';
     siddharth['isMarried'] = true;

     console.log(siddharth);

     // New Object syntax
     var jane = new Object();

     jane.name = 'Jane';
     jane.birthYear = 1990;
     jane['lastName'] = 'Smith';

     console.log(jane);
     */


    /***************************************
     * Objects and Methods
     */
    /*
    var siddharth = {
        firstName : 'Siddharth',
        lastName : 'Bhardwaj',
        birthYear : 1994,
        family: ['Sanjay','Seema','Rhythm'],
        job: 'Associate Consultant',
        isMarried: false,
        calcAge: function(){
            this.age =  2018 - this.birthYear;
        }
    };

    siddharth.calcAge();
    console.log(siddharth);
    */

    /***************************************
     * Loops and iteration
     */

     
    var siddharth = ['Siddharth', 'Bhardway', 1994, 'Associate Consultant', false, 'blue'];
    var i = siddharth.length - 1;

    for(;i>=0;i--)
    {
        console.log(siddharth[i]);
    }






