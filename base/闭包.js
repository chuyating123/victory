// 定义： 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。

// 特点：
// 1.让外部访问函数内部变量变成可能
// 2.变量会常驻在内存中
// 3.可以避免使用全局变量,防止全局变量污染;

// 优点：可以读取其他函数内部的变量，并将其一直保存在内存中。
// 缺点：可能会造成内存泄漏或溢出。
const fn=()=>{
    let a=0;
    return ()=>{
        console.log(a);
    }
}

fn()()

// 通过闭包实现每隔一秒输出一个数字
// const getNumber=()=>{
//     for(var i=0;i<10;i++){
//         ((i)=>{
//             setTimeout(()=>{
//                 console.log(i);
//             },1000*i)
//         })(i)
//     }
// }
// getNumber();

// 通过let块级作用域实现
const getNumberNew=()=>{
    for(let i=0;i<10;i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}

getNumberNew();

