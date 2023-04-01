// es6方式
// let arr = [1, 2, 2, 3, 3, 3, 4, 5];
// let newSet=new Set(arr);
// let newArr=Array.from(newSet);
// console.log(newArr);

// 对象的属性不可重复的原理
// const unRepeat = (arr) => {
//     let obj = {},
//         res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!obj[arr[i]]) {
//             obj[arr[i]] = 1;
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log(unRepeat(arr))

// reduce方法
let arr = [1, 2, 2, 3, 3, 3, 4, 5];
let newArr = arr.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
        return pre.concat(cur)
    } else {
        return pre;
    }
},[])

console.log(newArr);