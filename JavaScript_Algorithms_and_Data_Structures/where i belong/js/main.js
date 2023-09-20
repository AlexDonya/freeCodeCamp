function getIndexToIns(arr, num) {
    if (arr.length > 0) {
        arr.sort((a, b) => a - b);
        // console.log(arr);
        const a = [];
        for (let i = 0; i < arr.length; i++) {
            if (num >= arr[i - 1] && num <= arr[i]) {
                a.push(num);
                a.push(arr[i]);
            } else if (num >= arr[i] && arr[i + 1] === undefined) {
                a.push(arr[i]);
                a.push(num);
            } 
            else {
                a.push(arr[i]);
            }
        }
        // console.log(a);

        for (let i = 0; i < a.length; i++) {
            if (a[i] === num) {
                return i;
            }
        }
    } else {
        return 0;
    }
}

// console.log(getIndexToIns([40, 60], 50));
// console.log(getIndexToIns([20,3,5], 19));
// console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));