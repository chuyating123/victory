// 防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时
const debounce=(fn,delay)=>{
    let timer;
    return (...args)=>{
        // args是用来传递fn中的参数的，若没有可不传
        if(timer) clearTimeout(timer);
        timer=setTimeout(()=>{
            fn(this,args);
        },delay)
    }
}

const debounced=debounce(()=>{
    console.log(456);
},2000)

// 防抖在连续的事件，只需触发一次回调的场景有：

// 搜索框搜索输入。只需用户最后一次输入完，再发送请求(停下来才搜)
// 手机号、邮箱验证输入检测
// 窗口大小resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。