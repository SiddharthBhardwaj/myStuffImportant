var john = {
    expense : [124,48, 268, 180, 42],
    tip: [],
    finalBill : [],
    calcTip: function() {
        for(var i=0;i<this.expense.length;i++){
            switch(true){
                case this.expense[i]<50:
                    this.tip[i] = this.expense[i]*0.2;
                    this.finalBill[i] = this.expense[i] + this.tip[i];
                    break;
                case this.expense[i]<200:
                    this.tip[i] = this.expense[i]*0.15;
                    this.finalBill[i] = this.expense[i] + this.tip[i];
                    break;
                default:
                    this.tip[i] = this.expense[i]*0.1;
                    this.finalBill[i] = this.expense[i] + this.tip[i];
            }
        }
    }
}

john.calcTip();

console.log(john.tip);
console.log(john.finalBill);

var mark = {
    expense: [77, 375, 110, 45],
    tip: [],
    finalBill: [],
    calcTip: function(){
        for(var i=0;i<this.expense.length;i++){
            switch(true){
                case this.expense[i]<100:
                    this.tip[i] = this.expense[i]*0.2;
                    this.finalBill[i] = this.expense[i] + this.tip[i];
                    break;
                case this.expense[i]<300:
                    this.tip[i] = this.expense[i]*0.1;
                    this.finalBill[i] = this.expense[i] + this.tip[i];
                    break;
                default:
                    this.tip[i] = this.expense[i]*0.25;
                    this.finalBill[i] = this.expense[i] + this.tip[i];
            }
        }
    }
}

mark.calcTip();

console.log(mark.tip);
console.log(mark.finalBill);

var calcAvg = function(person){
    var avg = 0
    for(var i = 0; i<person.finalBill.length;i++){
        avg += person.finalBill[i];
    }
    avg = avg/person.finalBill.length;
    return avg;
}

var johnAvg = calcAvg(john);
var markAvg = calcAvg(mark);

console.log(johnAvg);
console.log(markAvg);

if(johnAvg>markAvg){
    console.log('John\'s family paid more bill on average which is: ' + johnAvg);
} else if(markAvg>johnAvg){
    console.log('Mark\'s family paid more bill on average which is: ' + markAvg);
}else{
    console.log('Both the families spend the same avg amount which is: ' + johnAvg);
}