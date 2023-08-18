function switchOfStuff(val) {
    let answer = "";
    // Змініть код лише під цим рядком
    switch (val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        default:
            answer = 'stuff';
            break;
    }


    // Змініть код лише над цим рядком
    return answer;
}

console.log(switchOfStuff('a'));
console.log(switchOfStuff('b'));
console.log(switchOfStuff('c'));
console.log(switchOfStuff('d'));