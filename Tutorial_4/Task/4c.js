function isPalindrome(n) {
    let reverseWord = "";
    for (let i = n.length; i >= 0; i--) {
        reverseWord += n.charAt(i);
    }
    return reverseWord==n;
}
console.log("Task C:");
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));
