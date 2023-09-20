function mutation(arr) {
    const mainWord = arr[0].toLowerCase().split('');
    const compareWord = arr[1].toLowerCase().split('');
    let count = 0;
    for (let w of compareWord) {
        if (mainWord.includes(w)) {
            count += 1;
        }
    }
    if (count === compareWord.length) {
        return true;
    }
    return false;
}


console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["Mary", "Army"]));