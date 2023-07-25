### 数据结构 数组
#### 7.25
- 二分查找
```javascript
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
```
- 移除数组中某一值
```javascript
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
```