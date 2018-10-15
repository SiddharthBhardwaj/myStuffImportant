var tipArray = new Array();
var finalBillArray = new Array();
var tip,finalBill,i;
var bill = [124,48,268];

function calculateTip(bill){
    for(i=0;i<bill.length;i++)
    {
        switch(true){
            case bill[i]<50:
                tip = bill[i]*0.20;
                tipArray.push(tip);
                finalBill = bill[i] + tip;
                finalBillArray.push(finalBill);
                break;
            case bill[i]<200:
                tip = bill[i]*0.15;
                tipArray.push(tip);
                finalBill = bill[i] + tip;
                finalBillArray.push(finalBill);
                break;
            default:
                tip = bill[i]*0.10;
                tipArray.push(tip);
                finalBill = bill[i] + tip;
                finalBillArray.push(finalBill);               
        }
    }
}

calculateTip(bill);

console.log('John\'s Tips are: '+ tipArray);
console.log('John\'s Final bills are: ' + finalBillArray);