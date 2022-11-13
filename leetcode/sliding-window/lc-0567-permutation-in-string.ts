/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

const permutationInString = (s1: string, s2: string): boolean => {
  // create hashmap of all char counts in s1
  const chars1 = {};
  for (const char of s1) {
      if (chars1[char] == null) {
          chars1[char] = 0;
      }
      chars1[char]++;
  }
  
  const chars2 = {};

  // sliding window
  let start = 0;
  for (let end = 0; end < s2.length; end++) {
      // add next character
      const endChar = s2[end];
      if (chars2[endChar] == null) {
          chars2[endChar] = 0;
      }
      chars2[endChar]++;
      
      // if window size is not yet equal to s1, continue
      if (end - start + 1 < s1.length) {
          continue;
      }
      
      // check if all keys in both hashmaps are equal
      if (Object.keys(chars1).every(char => chars1[char] === chars2[char])) {
          return true;
      }
      
      // subtract the outgoing char at the start of the window
      const startChar = s2[start];
      chars2[startChar]--;
      if (chars2[startChar] == 0) {
          delete chars2[startChar];
      }
      start++;
  }
  
  // no matches were found
  return false;
}

/*
time complexity = O(n)
space complexity = O(1)
*/
