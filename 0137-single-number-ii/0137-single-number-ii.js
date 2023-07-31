/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();
  
    for(let i = 0; i < nums.length; i++){
      if(map.has(nums[i])){
        map.set(nums[i], map.get(nums[i]) + 1);
      } else {
        map.set(nums[i], 1);
      }
    }
  
  return [...map].sort((a,b) => a[1] - b[1])[0][0];
};