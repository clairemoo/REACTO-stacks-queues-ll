function nextGreatestElement(input) {
  const nextGreatestArray = Array(input.length).fill(-1, 0, input.length), stack=[];
  for (let i = 0; i < input.length; i++) {
    const elem = input[i];
    let stackIndex = stack.length - 1;
    while(stackIndex >= 0) {
      const previousIndex = stack[stackIndex];
      if(input[previousIndex] < elem) {
        nextGreatestArray[previousIndex] = elem;
        stack.pop();
        stackIndex--;
      } else {
        break;
      }
    }
    stack.push(i);
  }
  return nextGreatestArray;
}

const array = [4, 5, 2, 25];

const array2 = [13, 7, 6, 12];

console.log(nextGreatestElement(array));

console.log(nextGreatestElement(array2));