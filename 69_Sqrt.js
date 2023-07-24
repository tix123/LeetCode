/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let hi = x
    let lo = 0
    while (lo <= hi) {
        let mi = Math.floor((lo + hi) / 2)
        if (mi * mi <= x && (mi + 1) * (mi + 1) > x) {
            return mi
        } else if (mi * mi > x) {
            hi = mi - 1
        } else {
            lo = mi + 1
        }
    }

};


let x = 0

let result = mySqrt(x);

console.log(result);