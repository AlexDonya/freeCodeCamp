function sum(arr, n) {
    // Змініть код лише під цим рядком
    // let num = 0;
    // for (let i = 0; i < n; i++) {
    //     num += arr[i];
    // }
    // return num;

    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Змініть код лише над цим рядком
}

console.log(sum([1], 0));
console.log(sum([2, 3, 4], 1));
console.log(sum([2, 3, 4, 5], 3));