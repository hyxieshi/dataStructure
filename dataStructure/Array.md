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
- 给定一个数 输出顺时针的矩阵
```javascript
/**
 * 初始化数组的时候
 * 一开始是这么写的  出问题了
 * new Array(5).fill(new Array(5).fill(0))
 * 本意是 初始化一个5*5的数组
 * 结果是 5个5个的数组
 * 因为fill 里面传入的如果是个引用类型的值
 * 实际上是填充同一个地址
 * 所以我后续的二维赋值操作 会同步
 * =-=  研究了好久 一直以为我复制有问题
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
```
- 给定一个目标值 及一个数组 寻与目标值相等加值
```javascript
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
```