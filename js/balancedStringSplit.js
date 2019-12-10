
// 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。

// 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。

// 返回可以通过分割得到的平衡字符串的最大数量。


// 示例 1：

// 输入：s = "RLRRLLRLRL"
// 输出：4
// 解释：s 可以分割为 "RL", "RRLL", "RL", "RL", 每个子字符串中都包含相同数量的 'L' 和 'R'。


/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let result = 0
  let status=0

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "R") {
      status+=1
    } else if (s.charAt(i) == "L") {
      status-=1
    }
    if (status == 0) {
      result++
    }
  }
  return result
};


console.log('====================================');
console.log(balancedStringSplit("RLRRLLRLRL"));
console.log('====================================');