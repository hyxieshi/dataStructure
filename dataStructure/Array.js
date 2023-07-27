/*
 * @Author: SunBOY
 * @Date: 2023-07-25 22:56:54
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-07-27 23:36:58
 * @FilePath: \dataStructure\Array.js
 * @Description: 
 * Copyright 2023 OBKoro1, All Rights Reserved. 
 * 2023-07-25 22:56:54
 */
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
// console.log(remove(arr, 4))


/**
 * 矩阵  5
 * [
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []]
]
* @param {number} n 行列
 */
function matrix(n) {
    let arr = Array.from({ length: n }, () => new Array(n).fill(0)); //初始化数组
    let x = 0,
        y = 0; //每一圈的起点
    let i = 0,
        j = 0;
    let item = 1; //填充的数值
    let number = parseInt(n / 2); //循环次数
    let length = n;
    while (number--) {
        length = length - 1;
        i = x;
        j = y;
        for (i; i < length; i++) {
            arr[j][i] = item++;
        }
        for (j; j < length; j++) {
            arr[j][i] = item++;
        }
        x++;
        y++;
        for (i; i >= x; i--) {
            arr[j][i] = item++;
        }
        for (j; j >= y; j--) {
            arr[j][i] = item++;
        }
    }
    // 最后一个点
    if (n % 2 === 1) {
        arr[x][y] = item;
    }
    return arr;
}
// console.table(matrix(30))


/**查询最小序列
 **/
function b(targe, nums) {
    let l = 0,
        r = 0;
    let item = 0;
    let a = Infinity;
    while (r < nums.length) {
        item += nums[r];
        if (item === targe) {
            a = Math.min(a, r - l + 1);
            l++;
            r = l;
            item = 0;
        } else if (item > targe) {
            l++;
            r = l;
            item = 0;
        } else r++;
    }
    return a;
}
// console.log(b(5, [1, 2, 2, 4, 1, 4]));

/**
 * 给一个递增的数组
 * 放回平方后递增的数组
 * @param {number[]} nums 
 */
function c(nums) {
    let arr = new Array(nums.length)
    let index = nums.length - 1
    let left = 0
    let right = nums.length - 1
    while (!(index < 0)) {
        if (nums[left] * nums[left] > nums[right] * nums[right]) {
            arr[index] = nums[left] * nums[left]

            left++
            index--
        }
        else {
            arr[index] = nums[right] * nums[right]
            right--
            index--
        }
    }
    return arr
}
console(c([-7, -3, 2, 3, 11]))