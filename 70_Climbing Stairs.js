/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    let mem = []
    let step = (n) => {
        if (n <= 2) return n
        if (mem[n] !== undefined) return mem[n]
        mem[n] = step(n - 2) + step(n - 1)
        return mem[n]
    }
    return step(n)

    // ======================== Over Time Limitation ========================
    // let cnt = 0
    // let step = function (remain) {
    //     if (remain >= 2) {
    //         step(remain - 1)
    //         step(remain - 2)
    //     } else if (remain === 1) {
    //         step(remain - 1)
    //     } else if (remain === 0) {
    //         cnt++
    //     }
    // }
    // step(n)
    // return cnt
    // ======================== Over Time Limitation ========================


};


let n = 4

let result = climbStairs(n);

console.log(result);