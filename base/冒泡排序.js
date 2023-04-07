// 前一个和后一个比较，大的放后面，升序
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const arr = [3, 2, 5, 1, 6, 2, 7];
console.log(bubbleSort(arr));