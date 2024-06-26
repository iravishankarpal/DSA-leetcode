var reverse = function (x) {
    let value = parseInt(String(x).split("").reverse().join(""))
    if (x < 0) {
        value = -value
    } else {
        value = value
    }
    let MaxValue = Math.pow(2, 31)
    if (value > MaxValue - 1 || value < -MaxValue) {
        return 0
    }
    return value
};
console.log(reverse(-321))