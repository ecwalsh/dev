/*
Problem:

*/

function binarySearch(nums: Array<number>, target: number) {
  let start = 0;
  let end = nums.length - 1;
  
  while (start <= end) {
      const mid = Math.floor(start + (end - start)/2);
      if (target < nums[mid]) {
          end = mid - 1;
      } else if (target > nums[mid]) {
          start = mid + 1;
      } else {
          return mid;
      }
  }
  
  return -1;
}

/*
time complexity = O(n)
space complexity = O(1)
*/
