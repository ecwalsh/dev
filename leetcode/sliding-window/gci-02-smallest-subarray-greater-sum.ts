/*
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
Return 0 if no such subarray exists.
*/

const smallestSubarray = (arr: Array<number>, s: number): number => {
  let windowStart = 0;
  let currentSum = 0;
  let smallestSubarrayLength = Number.MAX_SAFE_INTEGER;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add next element
    currentSum += arr[windowEnd];

    while (currentSum >= s) {
      // recalculate smallest subarray length
      // note the + 1 when calculating window size
      smallestSubarrayLength = Math.min(windowEnd - windowStart + 1, smallestSubarrayLength);
      
      // subtract outoging element
      currentSum -= arr[windowStart];

      // slide window
      windowStart++;
    }
  }

  return smallestSubarrayLength === Number.MAX_SAFE_INTEGER ? 0 : smallestSubarrayLength;
}

/*
time complexity = O(n)
space complexity = O(1)
*/