/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanKeys = {
        I :1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let spl = s.split("")
    let  retrunValue = spl.reduce((a,c,i)=>  romanKeys[spl[i]] < romanKeys[spl[i+1]] ? a - romanKeys[c] : a + romanKeys[c],0)
    return retrunValue
};
console.log(romanToInt("MCMXCIV") === 1994)