function nextGreatestElement(input) {
  // create a next greatest array of our input length so we already handle the case of no greater elements
  const nextGreatestArray = Array(input.length).fill(-1, 0, input.length), stack=[];
  for (let i = 0; i < input.length; i++) {
    const elem = input[i];
    // Get our top element index, so we can use it later without removing. stack.peek()
    let stackIndex = stack.length - 1;
    while(stackIndex >= 0) {
      // Get the previous index so we can check if we currently are at a greater value
      const previousIndex = stack[stackIndex];
      if(input[previousIndex] < elem) {
        // Now that we have found a solution, we need to save it and backtrack
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