// 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

//  

// 示例 1：

// 输入：[-4,-1,0,3,10]
// 输出：[0,1,9,16,100]



/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  const result = []
  A.forEach(item => {
    result.push(item * item)
  })
  return result.sort((a, b) => {
    return a - b
  })
};


console.log('====================================');
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log('====================================');