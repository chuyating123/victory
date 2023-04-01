// 节流: n 秒内只运行一次，若在 n 秒内重复触发，只有第一次生效
const throttle=(fn,delay)=>{
    let timer=null;
    return (...args)=>{
        // args是用来传递fn中的参数的，若没有可不传
        if(timer) return;
        timer=setTimeout(()=>{
            fn.apply(this,args);
            timer=null;
        },delay)
    }
}

const throttled=throttle(()=>{
    console.log(123)
},2000)

// 节流在间隔一段时间执行一次回调的场景有：
// 滚动加载，加载更多或滚到底部监听
// 搜索框，搜索联想功能

