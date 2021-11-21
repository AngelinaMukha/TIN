//Write a JavaScript function which will take an array of numbers stored and find the 
//second lowest and second greatest numbers, respectively.
function secondLowestAndGreatest(arr){
    arr=arr.sort(function(a, b) {
        return a - b;
      });
    return "Second Max is: "+arr[1]+", second Min is: "+arr[arr.length-2];
}
console.log("Task H:");
console.log(secondLowestAndGreatest([1,3,5,4,9,6,8,7,12]));