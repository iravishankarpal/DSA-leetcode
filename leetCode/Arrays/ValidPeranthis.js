/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let strings = s.split("")
    if(strings.length % 2 != 0 ){
        return false
    }
    let q = []
    let dir = {
        "(": 0,
        ")": 0,
        "{": 1,
        "}": 1,
        "[": 2,
        "]": 2,
    }
    for( i = 0 ; i < strings.length ; i++){
        let cv = s[i]
        if(cv==="(" || cv==='{' || cv==='[' ){
            q.push(cv)
        }else{
            const lv = q[q.length - 1];
            if(dir[cv] === dir[lv]){
                q.pop()
            }else{
                return false
            }
        }
    }
    if(q.length ==0 ){
        return true
    }else{
        return false
    }
};
let resutl = isValid("()")
console.log('resutl :', resutl === false)