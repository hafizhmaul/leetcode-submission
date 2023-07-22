/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    return nums.map((num, index) => num[index] == 0 ? '1' : '0').join('');
};