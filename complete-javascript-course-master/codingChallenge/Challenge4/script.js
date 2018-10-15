var john = {
    fullName: 'John',
    mass: 100,
    height: 1.75,
    calcBMI: function(){
        return this.mass / (this.height * this.height);
    }
};

var mark = {
    fullName: 'Mark',
    mass: 95,
    height: 1.77,
    calcBMI: function(){
        return this.mass / (this.height * this.height);
    }
};

john.bmi = john.calcBMI();
mark.bmi = john.calcBMI();

console.log(john.fullName + ' has a BMI of ' + john.bmi);
console.log(mark.fullName + ' has a BMI of ' + mark.bmi);
if(john.bmi>mark.bmi){
    console.log(john.fullName +' has higher BMI');
}else if(john.bmi<mark.bmi){
    console.log(mark.fullName + ' has higher BMI');
}else{
    console.log('Both ' + john.fullName + ' and ' + mark.fullName + ' has equal BMI');
}

