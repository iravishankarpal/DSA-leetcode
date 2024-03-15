var twoSum = function(nums, target) {
    let num  
    nums.find((x,i)=>{
        for(let y=i+1; y <= nums.length ;y++){
            let finalValue = x + nums[y];
            if(finalValue === target){
                num =  [i,y]
                break;
            }
        }
       if(num){
        return true
       }
    })
    return num
};  
console.log(twoSum([2,7,11,15],9))