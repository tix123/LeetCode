/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length == 0) return false;
    if (s.length % 2 != 0) return false;
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        switch (char) {
            case ")":
                if (stack.pop() != "(") return false;
                break;

            case "}":
                if (stack.pop() != "{") return false;
                break;

            case "]":
                if (stack.pop() != "[") return false;
                break;

            default:
                stack.push(char);
                break;
        }
    }
    return stack.length == 0;
};

var s = '()[]{}';

var result = isValid(s);

console.log(result);