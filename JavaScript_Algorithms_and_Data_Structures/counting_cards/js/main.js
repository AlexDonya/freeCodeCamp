let count = 0;

function cc(card) {
    // Змініть код лише під цим рядком
    if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
        count += 1;
    } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count -= 1;
    }

    if (count > 0) {
        return count + ' Bet';
    } else if (count <= 0) {
        return count + ' Hold';
    } return "Change Me";
    // Змініть код лише над цим рядком
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));