
// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 示例 1:

// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 
// 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

/**
 * 想起来就写版本
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  var wordArr = s.split(' ')
  for (let index = 0; index < wordArr.length; index++) {
    wordArr[index] = reverseString(wordArr[index])
  }
  return wordArr.join(' ')
};

var reverseString = function (s) {
  let list = []
  for (let index = s.length - 1; index < s.length && index >= 0; index--) {
    list.push(s.charAt(index))
  }
  return list.join("")
};

console.log('====================================');
console.log(reverseWords("Let's take LeetCode contest"));
console.log('====================================');