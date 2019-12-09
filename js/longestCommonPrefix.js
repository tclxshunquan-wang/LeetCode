// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = ''
  //数组排序，可减少比对次数，但增加时间复杂度
  //   for (let i = 0; i < strs.length; i++) {
  //     for (let j = i + 1; j < strs.length; j++) {
  //         if (strs[i].length > strs[j].length) {
  //             [strs[i], strs[j]] = [strs[j], strs[i]]
  //         }
  //     }
  // }
  if (strs.length == 0) return '';
  let firstStr = strs[0]
  for (let i = 0; i < firstStr.length; i++) {
    let res = strs.every((item) => {
      return item[i] == firstStr[i]
    })
    if (res) {
      result = result + firstStr[i]
    } else {
      return result
    }
  }
  return result
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))