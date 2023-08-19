/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const longestWord = word1.length > word2.length ? word1 : word2;
    const arr = [];
    
    for(let i = 0; i < longestWord.length; i++){
      arr.push(word1[i]);
      arr.push(word2[i]);
    }
  
  return arr.join("");
};