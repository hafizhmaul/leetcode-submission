/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map();
  
  for(let i = 0; i < nums.length; i++){
    if(map.has(nums[i])){
      let currentValue = map.get(nums[i]);
      let incrementedValue = currentValue + 1;
      
      map.set(nums[i], incrementedValue)
    } else {
      map.set(nums[i], 1)
    }
  }
  
  let entries = Object.entries([...map]);
  let sortObject = Object.values(Object.fromEntries(entries)).sort((a,b) => b[1] - a[1]);
  
  return sortObject.map(([firstValue]) => firstValue).slice(0,k)
};