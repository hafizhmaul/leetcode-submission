/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
  let left = 1;
   for(let i = 1; i < arr.length; i++){
      if(arr[i] !== arr[i-1]){
         arr[left] = arr[i]
         left += 1
      }
   }
   
   return left;
};