function checkObj(obj, checkProp) {
    // Змініть код лише під цим рядком
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } return 'Not Found';
    // Змініть код лише над цим рядком
}

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));