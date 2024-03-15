/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let fristStringLength = strs[0].length
    let fstArr = strs[0].split("")
    let prefix = ""
    if(fristStringLength === 0) return prefix
    for (i = 0; i <= fristStringLength; i++) {
        let AllWordInArr = true
        for (j = 0; j < strs.length; j++) {
            let fistWordInArr = strs[j].split("")[i]
            if (fstArr[i] == fistWordInArr) {
                AllWordInArr = AllWordInArr && true
            } else {
                AllWordInArr = AllWordInArr && false
            }
        }
        if (AllWordInArr == true && fstArr[i]) { 
            prefix = prefix + fstArr[i]
        } else {
            return prefix
        }
    }
    return prefix
};
console.clear()
let output = longestCommonPrefix(["a"])
console.log('output :', output);
console.log(output === "a")