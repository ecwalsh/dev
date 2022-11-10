/*
Given a string s, find the length of the longest substring without repeating characters.
*/

const longestSubstring = (s: string): number => {
  let start = 0;
  let end = 0;
  
  let encountered = new Set();
  
  let max = 0;
  
  while (end < s.length) {
      // before adding end, check if already encountered
      // increment window and remove the starting character each time
      while (encountered.has(s[end])) {
          encountered.delete(s[start]);
          start++;
      }
      
      // add the new character
      encountered.add(s[end]);
      // since we know the new character is unique, we recalculate our max window size
      max = Math.max(max, end - start + 1)
      end++;
  }
  
  return max;
}

/*
time complexity = O(n)
space complexity = O(1)
*/
