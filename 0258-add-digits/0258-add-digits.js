/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
   let sum = num;
   
   while(sum.toString().length >= 2){
      const numStringToNum = sum.toString().split("").map((item) => Number(item)).reduce((acc, curr) => acc + curr, 0);
      
      sum = numStringToNum;
   }
   
   return sum;
};
