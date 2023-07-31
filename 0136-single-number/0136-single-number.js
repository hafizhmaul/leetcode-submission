/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.filter((value, index, array) => array.indexOf(value) === index && array.lastIndexOf(value) === index);
};
