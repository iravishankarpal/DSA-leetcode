var isPalindrome = function(x) {
    if(x<0){
        return false
    } 
    else{
        let y = x.toString()
        let z = y.split("")
        let reversed =  z.reduce((a,c)=> c + a,"")
        console.log('reversed :', reversed,typeof(reversed));
        return y === reversed
    }
    
};
console.log(isPalindrome(121))
console.log(isPalindrome(10))