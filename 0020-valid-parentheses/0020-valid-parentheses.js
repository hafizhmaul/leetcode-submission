/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	const stack = [];
    
    for(const bracket of s){
        if(bracket == '('){
            stack.push(')');
        } else if(bracket == '{'){
            stack.push('}');
        } else if(bracket == '['){
            stack.push(']')
        } else if (stack.length === 0 || stack.pop() !== bracket){
            return false;
        }
    }
    
    return stack.length === 0;
};