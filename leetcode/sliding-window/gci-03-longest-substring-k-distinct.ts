/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.
*/

const longestSubstringKDistinct = (str: string, k: number): number => {
  let windowStart = 0;
  let longestSubstring = 0;
  const charMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // store / increment frequency of next character in hash map
    const rightChar = str[windowEnd];
    if (charMap[rightChar] == null) {
      charMap[rightChar] = 0;
    }
    charMap[rightChar]++;

    // shrink the sliding window until we are left with k distinct elements
    while (Object.keys(charMap).length > k ) {
      // decrement (and optionally remove) outgoing character from map 
      const leftChar = str[windowStart];
      charMap[leftChar]--;
      if (charMap[leftChar] === 0) {
        delete charMap[leftChar];
      }

      // shrink the window
      windowStart++;
    }

    longestSubstring = Math.max(windowEnd - windowStart + 1, longestSubstring);
  }

  return longestSubstring;
}

/*
time complexity = O(n)
space complexity = O(k)
*/