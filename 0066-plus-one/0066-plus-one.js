/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const sum = BigInt(digits.join('')) + BigInt(1);
  
  return sum.toString().split('');
  
};