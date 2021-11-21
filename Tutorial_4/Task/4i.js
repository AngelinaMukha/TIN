//Write a JavaScript function to convert an amount of money to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) 
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
function amountTocoins(amount, coins){
    let rest=amount;
    let result="";
    while(rest>0){
        for(let i=0; i<coins.length; i++){
            while(rest-coins[i]>=0){
                result+=coins[i]+", ";
                rest-=coins[i];
            }
        }
    }
    return result;
}
console.log("Task I:");
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));