/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
   let res = [];
   let minimum = Math.min(...nums);
   let maximum = Math.max(...nums);
   for(let i = 1; i < (Math.min(minimum,maximum)+1); i++){
      if(minimum % i === 0 && maximum % i === 0){
         res.push(i)
      }
   }
   
   return res[res.length-1]
};