/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !==  t.length){
       return false;
    }
   
   if(t.split('').sort().join('') === s.split('').sort().join('')){
      return true;
   }
   
   return false
};