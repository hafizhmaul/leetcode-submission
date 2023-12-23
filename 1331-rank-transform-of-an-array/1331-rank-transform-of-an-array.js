/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
   const sortedSet = [...new Set(arr.slice().sort((a, b) => a - b))];
   const rankMap = new Map(sortedSet.map((value, index) => [value, index + 1]));

   return arr.map(element => rankMap.get(element));
};