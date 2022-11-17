# Binary Search 

## About
- When given a sorted array, binary search repeatedly checks the middle element against some criteria to repeatedly eliminate half of the array from the next iteration of the search

---

## When to Use
- Binary Search is only possible when the input is sorted 

---

## Complexity
- O(log n)

---

## Variants

---

## Template 

```
function binarySearch(nums: number[], target: number): number {
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
};
```
