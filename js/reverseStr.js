
// 给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。如果剩余少于 k 个字符，则将剩余的所有全部反转。如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。

// 示例:

// 输入: s = "abcdefg", k = 2
// 输出: "bacdfeg"


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let strArr = []
  for (let index = 0; index < s.length && 2 * k * index < s.length; index++) {
    strArr.push(s.slice(2 * k * index, 2 * k * (index + 1)))
  }
  for (let index = 0; index < strArr.length; index++) {
   if (strArr[index].length < k) {
      strArr[index] = reverseString(strArr[index])
    } else {
      strArr[index] = `${reverseString(strArr[index].slice(0, k))}${strArr[index].slice(k, strArr[index].length)}`
    }
  }

  return strArr.join('')

};

var reverseString = function (s) {
  let list = []
  for (let index = s.length - 1; index < s.length && index >= 0; index--) {
    list.push(s.charAt(index))
  }
  return list.join("")
};


console.log('====================================');
console.log(reverseStr('abcdefg', 2));
console.log('====================================');