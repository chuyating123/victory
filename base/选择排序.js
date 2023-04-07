// 未排序的序列里选出最小的，标记下标，如果跟当前不一致，则交换值，每次选出最小的放前面
const selectSort=(arr)=>{
    let temp;
    for(let i=0;i<arr.length-1;i++){
        let index=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[index]){
                index=j;
            }
        }

        if(i!==index){
            temp=arr[i];
            arr[i]=arr[index];
            arr[index]=temp;
        }
    }
    return arr;
}

let arr=[3,1,2,5,4,2,7]
console.log(selectSort(arr));