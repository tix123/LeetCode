/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let number = 0
    let prev = 0
    const table = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    for (let i = 0; i < s.length; i++) {
        let char = table[s.charAt(i)];
        if (char > prev) {
            number = number + char - prev * 2;
        } else {
            number = number + char;
        }
        prev = char;
    }
    return number;
};

var s = 'IX';

var result = romanToInt(s);

console.log(result);