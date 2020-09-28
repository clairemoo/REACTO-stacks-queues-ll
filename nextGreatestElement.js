function nextGreatestElement(input) {
  // create a next greatest array of our input length so we already handle the case of no greater elements
  const nextGreatestArray = Array(input.length).fill(-1, 0, input.length), stack=[];
  for (let i = 0; i < input.length; i++) {
    const elem = input[i];
    console.log('elem', elem);
    console.log('stack', stack);
    // Get our top element index, so we can use it later without removing. stack.peek()
    while(stack.length - 1 >= 0) {
      // Get the previous index so we can check if we currently are at a greater value
      const previousArrayIndex = stack[stack.length - 1];
      if(input[previousArrayIndex] < elem) {
        // Now that we have found a solution, we need to save it and backtrack
        nextGreatestArray[previousArrayIndex] = elem;
        stack.pop();
      } else {
        break;
      }
    }
    stack.push(i);
  }
  return nextGreatestArray;
}


const array = [4, 5, 2, 25];

console.log(nextGreatestElement(array));

// const array2 = [13, 7, 6, 12];

// console.log(nextGreatestElement(array2));