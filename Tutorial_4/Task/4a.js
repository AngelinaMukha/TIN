function factorialRec(number, res=1){
    while(number>=1){
        res*=number;
        number--;
        factorialRec(number)
    }
    return res;
}

function factorialIter(number){
    let result=1;
    for(let i=number; i>1; i--){
        result*=i;
    }
    return result;
}
console.log("Task A:");
console.log(factorialRec(6));
console.log(factorialIter(6));