/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.filter((item, index, arr) => arr.indexOf(item) === index && arr.lastIndexOf(item) === index);
};