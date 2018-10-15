(function(){
    var totalCorrectCount = 0;
    var Question  = function(question,options, correctAnswer){
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
    };
    var cont = true;
    var question0 = new Question('Is Taj Mahal In INDIA?',['0 : yes','1 : No'], 0);
    var question1 = new Question('Is Javascript a Cool Language?', ['0 : yes','1 : No'],0);
    var question2 = new Question('Is Delhi the capital of INDIA?',['0 : yes','1 : No'],0);
    var question3 = new Question('Which Vitamin Sun Gives?',['0 : A','1 : B','2 : C','3 : D'],3);
    var questionArray = [];
    questionArray.push(question0);
    questionArray.push(question1);
    questionArray.push(question2);
    questionArray.push(question3);
    function askQuestion() {
            var num = (Math.floor(Math.random() * 4));
            return function(arr) {
                while(cont) {
                console.log(arr[num].question);
                for(var j = 0; j<arr[num].options.length;j++)
                {
                    console.log(arr[num].options[j]);  
                }
                var answer = prompt('Please Enter the answer');
                if(answer == arr[num].correctAnswer) {
                    console.log('Bravo!');
                    totalCorrectCount++;
                }else if(answer === 'exit') {
                    cont = false;
                } else {
                    console.log('Please Try Again!');
                }
                console.log('Your Score is: ' + totalCorrectCount);
                askQuestion()(questionArray);
            }
        }
    }
    var questionsFinal = askQuestion();
    questionsFinal(questionArray);
})();

