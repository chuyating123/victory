const flat = (arr) => {
    if (Array.isArray(arr)) {
        let res = [];
        arr.map((i) => {
            if (Array.isArray(i)) {
                res = res.concat(flat(i))
            } else {
                res.push(i)
            }
        })
        return res;
    } else {
        return arr;
    }
}

const arr = [1, [2, 3, [4, 5, 6]], 7, 8, 9];
console.log(flat(arr))