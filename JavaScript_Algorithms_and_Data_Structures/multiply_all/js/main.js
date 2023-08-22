function multiplyAll(arr) {
    let product = 1;
    // Змініть код лише під цим рядком
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Змініть код лише над цим рядком
    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));