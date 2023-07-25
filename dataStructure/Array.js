//数字类型乱序数组

// const arr = [
//     -229, 207, 179, 25, 255, -357, -245, -71,
//     -398, 329, 168, -214, 215, 164, -354, -244,
//     441, -491, -393, -257, 192, -499, 288, -161,
//     -207, -336, -438, 382, 108, 360, -367, 259,
//     494, 266, -485, 186, 492, 113, -484, 148
// ];

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 6, 8];


/**
 * 
 * @param {Number[]} arr 目标数组  有序
 * @param {Number} targe 目标值
 * @returns {boolean}
 */

function binarySearch(arr, targe) {
    console.log(arr)
    let index;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        index = (right - left) / 2
        if (arr[index] === targe) return true
        else if (arr[index] < targe) left = index + 1
        else right = index - 1
    }
    return false
}
// console.log(binarySearch(arr.sort((a, b) => a - b), -486))

/**
 * 移除数组中的某个数
 * @param {number[]} arr 
 * @param {number} targe 
 */
function remove(arr, targe) {
    let i = 0
    for (let f = 0; f < arr.length; f++) {
        if (arr[f] !== targe) {
            arr[i++] = arr[f]
            // i++
        }
    }
    return arr
}
console.log(remove(arr, 4))