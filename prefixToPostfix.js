const operators = ['+', '-', '*', '/']
function prefixToPostfix(op) {
  const stack = [];
  for(let i = op.length - 1; i >= 0; i--) {
    const char = op.charAt(i);
    if (operators.indexOf(char) === -1) {
      stack.push(char);
    } else {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const expression = operand1 + operand2 + char;
      stack.push(expression);
    }
    console.log(stack);
  }
}

console.log(prefixToPostfix('*+AB-CD'))