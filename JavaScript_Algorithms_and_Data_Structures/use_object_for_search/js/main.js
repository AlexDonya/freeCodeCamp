// Налаштування
function phoneticLookup(val) {
    let result = "";

    // Змініть код лише під цим рядком
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    }

    result = lookup[val];

    // Змініть код лише над цим рядком
    return result;
}

console.log(phoneticLookup("charlie"));