// 原理：
// 选择一个基准元素，通常选择第一个元素作为基准元素；
// 通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比基准元素小，另外一部分的所有数据都比基准元素大；
// 然后按照此方法对这两部分数据分别进行快速排序，递归地进行此操作，直到整个序列有序。

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [4, 1, 2, 3, 7, 5, 6];
console.log(quickSort(arr));