/*
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
*/

const maxSumSubarray = (arr: Array<number>, k: number) => {
  let windowStart = 0;
  let currentSum = 0;
  let maxSum = 0;

  // the end of the window will iterate the entire length of the array 
  // initially the window will grow until it reaches size k
  // then the start of the window will begin to move as well
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add the next element to the sum
    currentSum += arr[windowEnd];

    // slide the window, but only if it has reached size k
    if (windowEnd >= k - 1) {
      // update the max sum if necessary
      maxSum = Math.max(currentSum, maxSum);

      // subtract the element exiting the window
      currentSum -= arr[windowStart];

      // slide the window
      windowStart++;
    }
  }

  return maxSum;
}

/*
time complexity = O(n)
space complexity = O(1)
*/