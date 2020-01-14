// 在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。

// 返回重复了 N 次的那个元素。

//  

// 示例 1：

// 输入：[1,2,3,3]
// 输出：3
// 示例 2：

// 输入：[2,1,2,5,3,2]
// 输出：2
// 示例 3：

// 输入：[5,1,5,2,5,3,5,4]
// 输出：5

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {

  let result = new Map()
  for (let a in A) {
    if (result.has(A[a])) {
      return A[a]
    } else {
      result.set(A[a], 1)
    }

  }
  return result

};

console.log('====================================');
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
console.log('====================================');