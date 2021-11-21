function binarySearch(key, arr) {
    let i = 0;
    let k = arr.length - 1;
    while (i <= k) {
        let j = Math.floor((i+k)/2);
        if (arr[j] === key) {
            return j;
        } else {
            if (arr[j] > key) {
                k = j - 1;
            } else {
                i = j + 1;
            }
        }
    }
    return -1;
}
console.log("Task J:");
console.log(binarySearch(5, [1, 2, 5, 10]));