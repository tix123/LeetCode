/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x % 10 == 0 && x != 0) return false;
    
    var x_str = x.toString();
    if (x_str.length == 1) return true;
    
    var reverse = x.toString().split('').reverse().join('');
    return x_str == reverse;

    // ======================== Other Solutions ========================

    // if (x < 0) {
    //     return false;
    // }
    // if (x % 10 == 0 && x != 0) {
    //     return false;
    // }
    // var half = 0
    // while (x > half) {
    //     half = half * 10 + x % 10
    //     x = Math.floor(x / 10)
    // }

    // return x == half || x == Math.floor(half / 10)

    // ======================== Other Solutions ========================

    // let reversed = 0;
    // let copy = x;

    // function reverse() {
    //     let digit = copy % 10;
    //     reversed = reversed * 10 + digit;
    //     copy = Math.floor(copy / 10);
    //     if (copy > 0) {
    //         reverse();
    //     }
    // }

    // reverse();

    // return x == reversed

    // ======================== Other Solutions ========================

    // if (x < 0) {
    //     return false;
    // }
    // if (x % 10 == 0 && x != 0) {
    //     return false;
    // }
    // var x_str = x.toString();
    // if (x_str.length == 1) {
    //     return true;
    // }

    // for (let i = 0; i < x_str.length; i++) {
    //     if (x_str.charAt(i) != x_str.charAt(x_str.length - 1 - i)) {
    //         return false;
    //     }
    // }

    // return true;
};

var x = 121

var result = isPalindrome(x);

console.log(result);