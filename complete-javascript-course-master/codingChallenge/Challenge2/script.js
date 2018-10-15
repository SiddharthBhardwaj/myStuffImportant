/***********************
 * Coding Challenge 2
 */

 //Declare John's score variables
 var jm1, jm2, jm3, jAverage;
 jm1 = 89;
 jm2 = 120;
 jm3 = 103;
 jAverage = (jm1 + jm2 + jm3) / 3; //Average of three matches

 //Declare Mike's score variables
 var mm1, mm2, mm3, mAverage;
 mm1 = 116;
 mm2 = 94;
 mm3 = 123;
 mAverage = (mm1 + mm2 + mm3) / 3; //Average of three matches

 //show Average Scores

 console.log ("John Score: " + jAverage);
 console.log ("Mike Score: " + mAverage);

 //check who won the average and paste it on the console

 switch(true){
     case jAverage > mAverage: 
        console.log('John won with score of ' + jAverage);
        break;
     case jAverage < mAverage:
        console.log('Mike won with the score of ' + mAverage);
        break;
     default:
        console.log('It was a draw with the score of ' + jAverage);
 }


 //extra part of challenge

 console.log("Extra part of the challenge: ");

 //Declare variables for the Mary's scores
 var maryM1,maryM2,maryM3;
 maryM1 = 97;
 maryM2 = 134;
 maryM3 = 105;
 maryAverage = (maryM1 + maryM2 + maryM3) / 3; //Average of three Matches

 // Show average score
 
 console.log('Mary Score: ' + maryAverage);



 //check who won the average and paste it on the console

 switch(true){
    case ((jAverage > mAverage)&&(jAverage > maryAverage)): 
       console.log('John won with score of ' + jAverage);
       break;
    case ((jAverage < mAverage) && (mAverage > maryAverage)):
       console.log('Mike won with the score of ' + mAverage);
       break;
    case ((jAverage < maryAverage) && (mAverage < maryAverage)):
       console.log('Mary won with the score of ' + maryAverage);
       break;
    default:
       console.log('It was a draw with the score of ' + jAverage);
}





