/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
   const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
   let maxCount = 0;
   let currCount = 0;

   for (let i = 0; i < k; i++) {
      if (vowels.has(s[i])) {
         currCount++;
      }
   }

   maxCount = currCount;

   for (let i = k; i < s.length; i++) {
      if (vowels.has(s[i - k])) {
         currCount--;
      }

      if (vowels.has(s[i])) {
         currCount++;
      }

      maxCount = Math.max(maxCount, currCount);
   }

   return maxCount;
};
