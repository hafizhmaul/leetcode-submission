/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[^a-zA-Z0-9]/g;
    const result = s.replace(regex, "").toLowerCase();

    if(result === result.split('').reverse().join("")){
        return true
    } else {
        return false
    }
};