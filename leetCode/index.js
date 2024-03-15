/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let strings = s.split("")
    let dir = {
        "(" : 0,
        ")" : 0,
        "{" :1,
        "}" :1,
        "[" :2,
        "]" :2,
    }
    if(strings.length %  2 != 0){
        return false
    }
    for(let i=0;i<strings.length-1;i++){
        let a = dir[strings[i]] != dir[strings[i+1]] 
        if(a){
            return false
        }
    }
};

let resutl = isValid("()[]{}")
console.log('resutl :', resutl === true)