/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let trimmed = s.trim();
    return trimmed.length - trimmed.lastIndexOf(" ") - 1

    // ======================== Other Solutions ========================

    // let start = false;
    // let count = 0;
    // for (let i = s.length - 1; i >= 0; i--) {
    //     if (s.charAt(i) != " ") {
    //         start = true;
    //         count++;
    //     }
    //     if (s.charAt(i) == " " && start == true){
    //         return count;
    //     }
    // }
    // return count;

};

var s = "Woo "

var result = lengthOfLastWord(s);

console.log(result);
