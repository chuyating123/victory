/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map=new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])) return [map.get(target-nums[i]),i];
        map.set(nums[i],i);
    }
};
// @lc code=end

// 在这个算法中，我们使用哈希表来存储已经遍历过的元素及其对应的下标。
// 对于每个元素，我们首先计算出它所需的补数，然后在哈希表中查找是否存在这个补数。
// 如果存在，说明我们已经找到了答案，直接返回这两个元素的下标即可。
// 如果不存在，我们将这个元素及其下标存储到哈希表中，以便后续的查找。
// 如果在数组中找不到符合要求的两个元素，则返回 undefined。

