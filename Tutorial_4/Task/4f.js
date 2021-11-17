//Write a JavaScript function that accepts a number 
//as a parameter and check the number is prime or not
function isPrime(num){
    if(num<1){
        return false;
    }
    for(let i=num-1; i>1; i--){
        if(num%i==0){
            return false;
        }
    }
    return true;
} 
console.log("Task F:");
console.log(isPrime(1));