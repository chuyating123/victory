// 基本类型数据保存在在栈内存中
// 引用类型数据保存在堆内存中，引用数据类型的变量是一个指向堆内存中实际对象的引用，存在栈中

// 浅拷贝：指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝，如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址
// 即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址
// 深拷贝：深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性

const deepclone = (target) => {
    let result;
    if (typeof target === 'object') {
        if (Array.isArray(target)) {
            result = [];
            target.map((item) => {
                result.push(deepclone(item));
            })
        } else {
            result = {};
            for (key in target) {
                result[key] = deepclone(target[key])
            }
        }
        return result;
    } else {
        return target;
    }
}

const target = {
    name: 'lucky',
    age: 18,
    like: ['singSong', 'dance', 'eat'],
    friends: [{
            name: '马腾',
            age: 20,
        },
        {
            name: 'joy',
            age: 22,
        }
    ]
}
const newTarget = deepclone(target);
target.name = '褚雅婷';
console.log(newTarget);