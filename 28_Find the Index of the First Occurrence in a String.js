/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    return haystack.indexOf(needle)

};


let haystack = "sadbutsad", needle = "asad"

let result = strStr(haystack, needle);

console.log(result);