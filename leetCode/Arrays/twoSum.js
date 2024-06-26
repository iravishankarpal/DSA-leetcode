// var twoSum = function(nums, target) {
//     let num  
//     nums.find((x,i)=>{
//         for(let y=i+1; y <= nums.length ;y++){
//             let finalValue = x + nums[y];
//             if(finalValue === target){
//                 num =  [i,y]
//                 break;
//             }
//         }
//        if(num){
//         return true
//        }
//     })
//     return num
// };  

var twoSum = function (nums, target) {
    let num = {}
    for(let i = 0 ;i<nums.length;i++){
        let lookingValue =  target - nums[i]
        if(lookingValue in num){
            return [i,num[lookingValue]]
        }else{
            num[nums[i]] = i
        }
    }
};  
// var twoSum = function (nums, target) {
//     let map = {}
//     for (let i = 0; i < nums.length; i++) {
//         let l = target - nums[i]
//         if (l in map) return [i, map[l]]
//         map[nums[i]] = i
//     }
// };    
var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i]
        if (diff in map) return [i,map[diff]]
        map[nums[i]] = i
    }
};
console.log(twoSum([2,7,11,15],9))