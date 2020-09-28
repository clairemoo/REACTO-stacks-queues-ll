function evaluateNextGreaterFrequency(array, frequency) {
  // Create a stack that holds our indices
  const stack = [0], result = Array(array.length).fill(-1, 0, array.length);
  for (let i = 1; i < array.length; i++) {
    // Stack.peek() is a common functionality of stacks, but we can emulate it
    // with array getters. We want to access the top value of our stack without removing it
    let currentIndex = stack[stack.length - 1];
    // If the frequency on top of our stack is less than the current element's frequency,
    // then continuously pop the stack until we have a frequency value higher than the current 
    while(frequency[array[currentIndex]] < frequency[array[i]] && stack.length > 0) {
      result[currentIndex] = array[i];
      stack.pop();
      // Need to always make sure to move our current index to the actual value at the top of our stack
      currentIndex = stack[stack.length - 1];
    }
    stack.push(i);
  }
  return result;
}

function nextGreaterFreq(array) {
  let max = Number.MIN_SAFE_INTEGER;
  // Get the max value of the array
  for(let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  // fill our frequency array of the frequency of each number corresponding to the index of the array
  let freq = Array(max + 1).fill(0, 0, max + 1);
  for (let i = 0; i < array.length; i++) {
    freq[array[i]]++;
  }
  return evaluateNextGreaterFrequency(array, freq);
}

const array = [1, 1, 2, 3, 4, 2, 1];
console.log(nextGreaterFreq(array)); // expect [-1, -1, 1, 2, 2, 1, -1]

const array2 = [6, 6, 7, 2, 1, 2];
console.log(nextGreaterFreq(array2)); // expect [-1, -1, 2, -1, 2, -1]