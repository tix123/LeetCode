/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;

    // ======================== Other Solutions ======================== 

    // let d = BigInt(digits.join('')) + 1n;
    // return Array.from(String(d.toString()), x => Number(x));

    // ======================== Other Solutions ======================== 

    // digits[digits.length - 1]++;
    // for (let i = digits.length - 1; i >= 0; i--) {
    //     if (digits[i] == 10) {
    //         digits[i] = 0;
    //         if (i == 0) {
    //             digits.unshift(1);
    //         } else {
    //             digits[i - 1]++;
    //         }
    //     } else {
    //         break;
    //     }
    // }
    // return digits;
};

var digits = [9, 9]

var result = plusOne(digits);

console.log(result);
