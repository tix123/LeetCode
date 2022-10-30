/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let prefix = "";

    loop:
    for (let i = 1; i <= strs[0].length; i++) {
        var sub_str = strs[0].substring(0, i);
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].indexOf(sub_str) != 0) {
                break loop;
            }
        }
        prefix = sub_str;
    }
    return prefix;

    // ======================== Other Solutions ========================

    // let prefix = "";

    // strs.sort();
    // let first = strs[0];
    // let last = strs[strs.length - 1];
    // let min_length = first.length > last.length ? last.length : first.length

    // for (let i = 0; i < min_length; i++) {
    //     if (first.charAt(i) != last.charAt(i)) {
    //         console.log("true")
    //         return prefix;
    //     }
    //     prefix += first.charAt(i)
    // }
    // return prefix;

};

// var strs = ["flower", "flow", "flight"]
var strs = ["a"]

var result = longestCommonPrefix(strs);

console.log(result);
