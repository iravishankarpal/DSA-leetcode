
var mergeTwoLists = function(list1, list2) {
    let l1l = list1.length
    let l2l = list2.length
    let l1  = list1
    let l2 = list2
    let limit = l1l + l2l
    let stack = []
    let l1c = 0
    let l2c = 0
    for(let i = 0 ; l1c + l2c <limit;i++){
        if(l1[l1c]===l2[l2c]){
            stack.push(l1[l1c])
            stack.push(l2[l2c])
            l1c++
            l2c++
        }else{
            if(l1[l1c]&&l2[l2c]){

                if(l1[l1c] < l2[l2c]){
                    stack.push(l1[l1c])
                    l1c++
                }else{
                    stack.push(l2[l2c])
                    l2c++
                }
            }else{
                if(l1[l1c]){
                    stack.push(l1[l1c])
                    l1c++

                }
                if(l2[l2c]){
                    stack.push(l2[l2c])
                    l2c++

                }
            }
        }
    }
    return stack
};
let result = mergeTwoLists([1,2,4],[1,3,4])
