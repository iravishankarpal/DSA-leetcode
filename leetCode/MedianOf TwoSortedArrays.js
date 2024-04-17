/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let beforeSortedArray = [ ...nums1, ...nums2 ]
    let mergedArray = beforeSortedArray.sort((a, b) => a - b)
    let median
    let index = Math.floor(mergedArray.length / 2)
    if (mergedArray.length % 2 === 0) {
        median = (mergedArray[index - 1] +  mergedArray[index]) / 2
    } else {
        median = mergedArray[index]
    }
    return median
};

console.log(findMedianSortedArrays([1,2], []))