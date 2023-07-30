/*
 * @Author: SunBOY
 * @Date: 2023-07-30 22:44:15
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-07-30 23:21:40
 * @FilePath: \dataStructure\linkedList.js
 * @Description: 链表 数据结构
 * Copyright 2023 OBKoro1, All Rights Reserved. 
 * 2023-07-30 22:44:15
 */
class linkedList {
    constructor(vaule, next) {
        this.vaule = vaule;
        this.next = next;
    }
}

let a = new linkedList(1, null);
let b = new linkedList(2, null);
let c = new linkedList(3, null);
let d = new linkedList(4, null);
let e = new linkedList(5, null);
let f = new linkedList(7, null);
let g = new linkedList(8, null);
let h = new linkedList(9, null);
let i = new linkedList(10, null);
let j = new linkedList(11, null);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;

//查询
function query(link, targe) {
    if (!link) return false
    let head = link
    while (head.next) {
        if (head.vaule === targe) return true
        head = head.next
    }
    return false
}
// console.log(query(a, 6))
// 遍历
function ergodic(head) {
    if (!head) return false
    while (head) {
        console.log(head.vaule)
        head = head.next
    }
}
// console.log(ergodic(a))
// 插入
function insert(heade, targe, number) {
    if (!heade) return false
    let head = heade
    while (head) {
        if (head.vaule === targe.vaule) {
            let node = new linkedList(number, null)
            node.next = head.next
            head.next = node
            return heade
        }
        head = head.next
    }
    return false
}
// console.log(ergodic(insert(a, e, 6)))
// 删除
function deleteLink(head, targe) {
    if (!head) return false
    let header = head
    while (header) {
        if (header.vaule === targe.vaule) {
            header.vaule = header.next.vaule
            header.next = header.next.next
            return head
        }
        header = header.next

    }
    return false
}
// console.log(ergodic(deleteLink(a, e)))


function inversion(head){
    let header = head


    return header
}