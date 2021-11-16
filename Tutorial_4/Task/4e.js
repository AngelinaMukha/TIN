function longestWord(n) {
    let words = n.split(" ");
    let maxWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxWord.length) {
        maxWord = words[i];
      }
    }
    return maxWord;
}
console.log("Task D:");
console.log(longestWord("Write a JavaScript function that accepts a string as a parameter and find the longest word within the string"));