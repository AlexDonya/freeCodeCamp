function randomRange(myMin, myMax) {
    // return Math.floor(Math.random() * (myMax - myMin + 1));
    // return Math.floor(Math.random() * 4);
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(randomRange(2, 5));