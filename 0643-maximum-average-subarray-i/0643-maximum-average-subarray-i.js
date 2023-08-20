/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let currentSum = 0;
  let maximumSum = -Infinity;
  
  for(let i = 0; i < nums.length; i++){
    currentSum += nums[i];
    if(i >= k - 1){
      maximumSum = Math.max(currentSum, maximumSum);
      currentSum -= nums[i - (k - 1)];
    }
  }
  
  return maximumSum / k;
};