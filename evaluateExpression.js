function evaluateExpression(expression) {
    const tokens = expression.split(' ');
    let currentValue = parseInt(tokens[0], 10);
    let sign = '+';

    for (let i = 2; i < tokens.length; i += 2) {
        const nextValue = parseInt(tokens[i], 10);

        switch (sign) {
            case '+':
                currentValue += nextValue;
                break;
            case '-':
                currentValue -= nextValue;
                break;
            default:
                throw new Error(`Unsupported operation: ${sign}`);
        }

        sign = tokens[i + 1];
    }

    return currentValue;
}

// Examples
console.log(evaluateExpression("3 + 4 - 2")); 
console.log(evaluateExpression("-1 + 2 - 3"));
console.log(evaluateExpression("10 + 5 + 3"));
console.log(evaluateExpression("7 + 6 - 4 - 1"));
