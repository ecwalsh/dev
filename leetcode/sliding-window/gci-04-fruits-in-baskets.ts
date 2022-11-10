/*
You are visiting a farm to collect fruits. 
The farm has a single row of fruit trees. 
You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. 
There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.
*/

// translation of problem statement: find longest substring with k distinct chars where k = 2
const fruitsIntoBaskets = (fruits: Array<string>): number => {
  let start = 0;
  let maxFruits = 0;
  let frequency = {};

  for (let end = 0; end < fruits.length; end++) {
    // add next fruit to frequency map
    const rightFruit = fruits[end];
    if (frequency[rightFruit] == null) {
      frequency[rightFruit] = 0;
    }
    frequency[rightFruit]++;

    // shrink window until only two fruits remain
    while (Object.keys(frequency).length > 2) {
      const leftFruit = fruits[start];
      frequency[leftFruit]--;
      if (frequency[leftFruit] === 0) {
        delete frequency[leftFruit];
      }

      start++;
    }

    maxFruits = Math.max(maxFruits, end - start + 1);
  }

  return maxFruits;
}

/*
time complexity = O(n)
space complexity = O(k)
*/