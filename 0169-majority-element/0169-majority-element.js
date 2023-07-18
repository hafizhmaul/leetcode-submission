/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1);
  }

  const arr = [...map.entries()];
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] > nums.length / 2) {
        return arr[i][0]
      }
  }
};
